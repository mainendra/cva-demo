import { Button as CVAButton } from "./components/button";

const PreviewPane = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className=" border-b [&_h1]:text-2xl [&_h1]:font-bold p-8 [&_h1]:mb-8 bg-gray-100">
    <h1>{title}</h1>
    <div className="flex-row flex-wrap items-start flex">{children}</div>
  </div>
);

const Col = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="w-80 p-8">
    <h2 className="font-bold border-b mb-5">{title}</h2>
    <div className="flex flex-col items-start space-y-3">{children}</div>
  </div>
);

function App() {
  return (
    <>
      <PreviewPane title="Buttons with CVA">
        <Col title="Regular">
          <CVAButton>Add product</CVAButton>
          <CVAButton size="slim">Add product (slim)</CVAButton>
          <CVAButton size="large">Add product (large)</CVAButton>
          <CVAButton disabled>Add product (disabled)</CVAButton>
          <CVAButton modifier="outline">Add product (outline)</CVAButton>
          <CVAButton modifier="plain">Add product (plain)</CVAButton>
          <CVAButton modifier="plain" size="large">
            Add product (large, plain)
          </CVAButton>
          <CVAButton loading>Add product</CVAButton>
        </Col>
        <Col title="Monochrome">
          <CVAButton variant="monochrome">Add product</CVAButton>
          <CVAButton variant="monochrome" size="slim">
            Add product (slim)
          </CVAButton>
          <CVAButton variant="monochrome" size="large">
            Add product (large)
          </CVAButton>
          <CVAButton variant="monochrome" disabled>
            Add product (disabled)
          </CVAButton>
          <CVAButton variant="monochrome" modifier="outline">
            Add product (outline)
          </CVAButton>
          <CVAButton variant="monochrome" modifier="plain">
            Add product (plain)
          </CVAButton>
          <CVAButton variant="monochrome" loading>
            Add product
          </CVAButton>
        </Col>
        <Col title="Primary">
          <CVAButton variant="primary">Add product</CVAButton>
          <CVAButton variant="primary" size="slim">
            Add product (slim)
          </CVAButton>
          <CVAButton variant="primary" size="large">
            Add product (large)
          </CVAButton>
          <CVAButton variant="primary" disabled>
            Add product (disabled)
          </CVAButton>
          <CVAButton variant="primary" modifier="outline">
            Add product (outline)
          </CVAButton>
          <CVAButton variant="primary" modifier="plain">
            Add product (plain)
          </CVAButton>
          <CVAButton variant="primary" loading>
            Add Product
          </CVAButton>
        </Col>
        <Col title="Destructive">
          <CVAButton variant="destructive">Add product</CVAButton>
          <CVAButton variant="destructive" size="slim">
            Add product (slim)
          </CVAButton>
          <CVAButton variant="destructive" size="large">
            Add product (large)
          </CVAButton>
          <CVAButton variant="destructive" disabled>
            Add product (disabled)
          </CVAButton>
          <CVAButton variant="destructive" modifier="outline">
            Add product (outline)
          </CVAButton>
          <CVAButton variant="destructive" modifier="plain">
            Add product (plain)
          </CVAButton>
          <CVAButton variant="destructive" loading>
            Add product
          </CVAButton>
        </Col>

        <Col title="Other">
          <CVAButton>Not full width as comparisson</CVAButton>
          <CVAButton fullWidth>Add product full width</CVAButton>
        </Col>
      </PreviewPane>
    </>
  );
}

export default App;
