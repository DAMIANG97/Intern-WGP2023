import type { FunctionComponent, ReactNode } from 'react';

// Required to work dom operations like `toBeInDocument` etc.
import '@testing-library/jest-dom/extend-expect';

interface TestWrapperProps {
  children: ReactNode;
}

/**
 * Component wrapper used in testing to provide all required by App HOCs.
 *
 * @example
 * ```tsx
 * import TestWrapper from '@jest/TestWrapper';
 *
 * it('should render component inside wrapper', async () => {
 *   render(<YourComponent />, { wrapper: TestWrapper });
 * });
 * ```
 */
const TestWrapper: FunctionComponent<TestWrapperProps> = ({ children }) => <>{children}</>;

export default TestWrapper;
