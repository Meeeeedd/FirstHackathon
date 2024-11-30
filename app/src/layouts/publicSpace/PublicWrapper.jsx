import PublicFooter from "./PublicFooter";
import PublicNavbar from "./PublicNavbar";

function PublicWrapper({ children }) {
  return (
    <>
      <PublicNavbar />
      <div>{children}</div>
      <PublicFooter />
    </>
  );
}

export default PublicWrapper;
