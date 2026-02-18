import {
  MortgageInput,
  MortgageResult,
  LoanInput,
  LoanResult,
  CompoundInterestInput,
  CompoundInterestResult,
  RetirementInput,
  RetirementResult,
  ProfitMarginInput,
  ProfitMarginResult,
  BreakEvenInput,
  BreakEvenResult,
  AmortizationEntry,
  LoanScheduleEntry,
  YearlyBreakdown,
  RetirementYearProjection,
  CreditCardPayoffInput,
  CreditCardPayoffResult,
  CreditCardPayoffEntry,
  SavingsGoalInput,
  SavingsGoalResult,
  SavingsGoalEntry,
} from '@/types';

/**
 * Calculate mortgage payment and amortization schedule
 */
export function calculateMortgage(input: MortgageInput): MortgageResult {
  const { loanAmount, interestRate, loanTermYears } = input;
  
  // Convert annual rate to monthly rate
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  
  // Calculate monthly payment using the formula: M = P[r(1+r)^n]/[(1+r)^n-1]
  let monthlyPayment: number;
  
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numberOfPayments;
  } else {
    monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }
  
  // Generate amortization schedule
  const amortizationSchedule: AmortizationEntry[] = [];
  let balance = loanAmount;
  
  for (let month = 1; month <= numberOfPayments; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    balance -= principalPayment;
    
    // Ensure balance doesn't go negative due to rounding
    if (balance < 0) balance = 0;
    
    amortizationSchedule.push({
      month,
      payment: monthlyPayment,
      principal: principalPayment,
      interest: interestPayment,
      balance,
    });
  }
  
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;
  
  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    amortizationSchedule,
  };
}

/**
 * Calculate loan EMI and payment schedule
 */
export function calculateLoan(input: LoanInput): LoanResult {
  const { principal, interestRate, loanTermMonths } = input;
  
  // Convert annual rate to monthly rate
  const monthlyRate = interestRate / 100 / 12;
  
  // Calculate EMI using the formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
  let emi: number;
  
  if (monthlyRate === 0) {
    emi = principal / loanTermMonths;
  } else {
    emi = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) / 
      (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
  }
  
  // Generate payment schedule
  const schedule: LoanScheduleEntry[] = [];
  let balance = principal;
  
  for (let month = 1; month <= loanTermMonths; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = emi - interestPayment;
    balance -= principalPayment;
    
    if (balance < 0) balance = 0;
    
    schedule.push({
      month,
      emi,
      principal: principalPayment,
      interest: interestPayment,
      balance,
    });
  }
  
  const totalAmount = emi * loanTermMonths;
  const totalInterest = totalAmount - principal;
  
  return {
    emi,
    totalAmount,
    totalInterest,
    schedule,
  };
}

/**
 * Calculate compound interest with optional regular contributions
 */
export function calculateCompoundInterest(input: CompoundInterestInput): CompoundInterestResult {
  const { principal, rate, time, frequency, additionalContribution = 0, contributionFrequency = 'monthly' } = input;
  
  const yearlyBreakdown: YearlyBreakdown[] = [];
  let currentBalance = principal;
  let totalContributions = principal;
  
  // Determine contribution per compounding period
  const contributionsPerYear = contributionFrequency === 'monthly' ? 12 : 1;
  const contributionPerPeriod = additionalContribution / (frequency / contributionsPerYear);
  
  for (let year = 1; year <= time; year++) {
    let yearStartBalance = currentBalance;
    let yearContributions = 0;
    
    // Calculate for each compounding period in the year
    for (let period = 0; period < frequency; period++) {
      // Add contribution at the beginning of the period
      if (additionalContribution > 0 && period % (frequency / contributionsPerYear) === 0) {
        currentBalance += contributionPerPeriod;
        yearContributions += contributionPerPeriod;
        totalContributions += contributionPerPeriod;
      }
      
      // Apply interest
      currentBalance *= (1 + rate / 100 / frequency);
    }
    
    const interestEarned = currentBalance - yearStartBalance - yearContributions;
    
    yearlyBreakdown.push({
      year,
      balance: currentBalance,
      interestEarned,
      totalContributions,
    });
  }
  
  const futureValue = currentBalance;
  const totalInterest = futureValue - totalContributions;
  
  return {
    futureValue,
    totalContributions,
    totalInterest,
    yearlyBreakdown,
  };
}

/**
 * Calculate retirement savings projection
 */
export function calculateRetirement(input: RetirementInput): RetirementResult {
  const { currentAge, retirementAge, currentSavings, monthlyContribution, expectedReturn, inflationRate } = input;
  
  const yearsToRetirement = retirementAge - currentAge;
  const monthlyRate = expectedReturn / 100 / 12;
  const yearlyProjection: RetirementYearProjection[] = [];
  
  let balance = currentSavings;
  let totalContributions = currentSavings;
  
  for (let year = 0; year <= yearsToRetirement; year++) {
    const age = currentAge + year;
    let yearStartBalance = balance;
    let yearContributions = 0;
    let yearInterest = 0;
    
    // Calculate monthly for this year
    for (let month = 0; month < 12; month++) {
      if (year > 0 || month > 0) { // Don't add contribution in the first month of first year
        balance += monthlyContribution;
        yearContributions += monthlyContribution;
        totalContributions += monthlyContribution;
      }
      
      const monthInterest = balance * monthlyRate;
      balance += monthInterest;
      yearInterest += monthInterest;
    }
    
    yearlyProjection.push({
      age,
      balance,
      contributions: yearContributions,
      interest: yearInterest,
    });
  }
  
  const totalSavings = balance;
  const totalInterest = totalSavings - totalContributions;
  
  // Calculate inflation-adjusted value
  const inflationAdjustedValue = totalSavings / Math.pow(1 + inflationRate / 100, yearsToRetirement);
  
  return {
    totalSavings,
    totalContributions,
    totalInterest,
    inflationAdjustedValue,
    yearlyProjection,
  };
}

/**
 * Calculate profit margins
 */
export function calculateProfitMargin(input: ProfitMarginInput): ProfitMarginResult {
  const { revenue, costOfGoodsSold, operatingExpenses = 0, otherExpenses = 0 } = input;
  
  // Gross Profit = Revenue - COGS
  const grossProfit = revenue - costOfGoodsSold;
  const grossProfitMargin = (grossProfit / revenue) * 100;
  
  // Operating Profit = Gross Profit - Operating Expenses
  const operatingProfit = grossProfit - operatingExpenses;
  const operatingProfitMargin = (operatingProfit / revenue) * 100;
  
  // Net Profit = Operating Profit - Other Expenses
  const netProfit = operatingProfit - otherExpenses;
  const netProfitMargin = (netProfit / revenue) * 100;
  
  return {
    grossProfit,
    grossProfitMargin,
    netProfit,
    netProfitMargin,
    operatingProfit,
    operatingProfitMargin,
  };
}

/**
 * Calculate break-even point
 */
export function calculateBreakEven(input: BreakEvenInput): BreakEvenResult {
  const { fixedCosts, variableCostPerUnit, pricePerUnit } = input;
  
  // Contribution Margin = Price - Variable Cost
  const contributionMargin = pricePerUnit - variableCostPerUnit;
  
  // Contribution Margin Ratio = Contribution Margin / Price
  const contributionMarginRatio = (contributionMargin / pricePerUnit) * 100;
  
  // Break-even Units = Fixed Costs / Contribution Margin
  const breakEvenUnits = fixedCosts / contributionMargin;
  
  // Break-even Revenue = Break-even Units × Price
  const breakEvenRevenue = breakEvenUnits * pricePerUnit;
  
  return {
    breakEvenUnits,
    breakEvenRevenue,
    contributionMargin,
    contributionMarginRatio,
  };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}

/**
 * Format percentage
 */
export function formatPercentage(num: number, decimals: number = 2): string {
  return `${formatNumber(num, decimals)}%`;
}

/**
 * Calculate credit card payoff schedule
 */
export function calculateCreditCardPayoff(input: CreditCardPayoffInput): CreditCardPayoffResult {
  const { balance, interestRate, monthlyPayment } = input;
  
  const monthlyRate = interestRate / 100 / 12;
  const schedule: CreditCardPayoffEntry[] = [];
  let currentBalance = balance;
  let month = 0;
  let totalInterest = 0;
  
  while (currentBalance > 0.01 && month < 600) { // Max 50 years
    month++;
    const interestPayment = currentBalance * monthlyRate;
    const principalPayment = Math.min(monthlyPayment - interestPayment, currentBalance);
    
    totalInterest += interestPayment;
    currentBalance -= principalPayment;
    
    if (currentBalance < 0) currentBalance = 0;
    
    schedule.push({
      month,
      balance: currentBalance,
      payment: monthlyPayment,
      interest: interestPayment,
      principal: principalPayment,
    });
    
    // Safety check - if payment is too small, break
    if (monthlyPayment <= interestPayment) {
      break;
    }
  }
  
  const totalPayment = balance + totalInterest;
  const payoffDate = new Date();
  payoffDate.setMonth(payoffDate.getMonth() + month);
  
  return {
    monthsToPayoff: month,
    totalInterest,
    totalPayment,
    payoffDate: payoffDate.toISOString().split('T')[0],
    schedule,
  };
}

/**
 * Calculate savings goal timeline
 */
export function calculateSavingsGoal(input: SavingsGoalInput): SavingsGoalResult {
  const { goalAmount, currentSavings, monthlyContribution, interestRate, compoundingFrequency } = input;
  
  const monthlyRate = interestRate / 100 / compoundingFrequency;
  const periodsPerYear = compoundingFrequency;
  const monthlyBreakdown: SavingsGoalEntry[] = [];
  
  let balance = currentSavings;
  let month = 0;
  let totalContributions = currentSavings;
  let totalInterest = 0;
  
  while (balance < goalAmount && month < 600) { // Max 50 years
    month++;
    
    // Add monthly contribution
    balance += monthlyContribution;
    totalContributions += monthlyContribution;
    
    // Apply interest (compounded monthly)
    const interestEarned = balance * monthlyRate;
    balance += interestEarned;
    totalInterest += interestEarned;
    
    monthlyBreakdown.push({
      month,
      balance,
      contribution: monthlyContribution,
      interest: interestEarned,
    });
  }
  
  const yearsToGoal = month / 12;
  
  return {
    monthsToGoal: month,
    yearsToGoal,
    totalContributions,
    totalInterest,
    finalAmount: balance,
    monthlyBreakdown,
  };
}
