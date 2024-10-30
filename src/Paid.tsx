import Links from "./Links";
import NavigationContextProvider from "./NavigationContextProvider";

export default function Paid() {
  return (
    <NavigationContextProvider>
      <h1>Paid</h1>
      <Links />
    </NavigationContextProvider>
  );
}
