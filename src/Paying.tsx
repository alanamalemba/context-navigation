import Links from "./Links";
import NavigationContextProvider from "./NavigationContextProvider";

export default function Paying() {
  return (
    <NavigationContextProvider>
      <h1>Paying</h1>
      <Links />
    </NavigationContextProvider>
  );
}
