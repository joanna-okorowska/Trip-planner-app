export const RouteWithNavbar = ({ path, element }: any) => {
  return (
    <div>
      <Navbar />
      <Route path={path} element={element} />
      <Footer />
    </div>
  );
};
