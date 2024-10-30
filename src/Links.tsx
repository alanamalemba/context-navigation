import {
  NAVIGATION_OPTIONS,
  useNavigationContext,
} from "./NavigationContextProvider";

export default function Links() {
  const { setCurrentPage } = useNavigationContext();
  return (
    <div>
      <button onClick={() => setCurrentPage(NAVIGATION_OPTIONS.Unpaid.title)}>
        Unpaid
      </button>
      <button onClick={() => setCurrentPage(NAVIGATION_OPTIONS.Paying.title)}>
        Paying
      </button>
      <button onClick={() => setCurrentPage(NAVIGATION_OPTIONS.Paid.title)}>
        Paid
      </button>
    </div>
  );
}
