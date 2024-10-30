import Links from "./Links";
import NavigationContextProvider from "./NavigationContextProvider";

export default function Unpaid() {
  return (
    <NavigationContextProvider>
      <h1>Unpaid</h1>
      <Links />
    </NavigationContextProvider>
  );
}
