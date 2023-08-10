import Breadcrumb from 'react-bootstrap/Breadcrumb'

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/#home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="//react-bootstrap.netlify.app/docs/getting-started/introduction">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample