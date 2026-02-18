import { metadata as toolMetadata } from './metadata';

export const metadata = toolMetadata;

export default function MetaTagsGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
