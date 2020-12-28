import Footer from '@/components/Footer'

const Layout = props => (
  <div className="font-sans antialiased text-gray-900">
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;