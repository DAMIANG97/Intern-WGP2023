import useBreakpoints from 'utils/Hooks/useBreakpoints';

function useIsDesktop(): boolean {
  const currentActive = useBreakpoints();
  return currentActive !== 'mobile' && currentActive !== 'tablet';
}

export default useIsDesktop;
