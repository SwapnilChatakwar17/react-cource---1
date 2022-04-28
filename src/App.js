import OscToDo from "./components/Todo.js";
import {List,Caption,AppProvider,Page,Card,ResourceList,Avatar,TextStyle,Form,FormLayout,Checkbox,TextField,} from "@shopify/polaris";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <OscToDo text="Learn React" />
      <OscToDo text="Master React" />
      <OscToDo text="Explore the full React course" />
      <List>
        <List.Item>
          Order #1001 <Caption>Received April 21, 2017</Caption>
        </List.Item>
        <List.Item>
          Order #1002 <Caption>Received April 22, 2017</Caption>
        </List.Item>
      </List>
      <AppProvider
        i18n={{
          Polaris: {
            ResourceList: {
              sortingLabel: "Sort by",
              defaultItemSingular: "item",
              defaultItemPlural: "items",
              showing: "Showing {itemsCount} {resource}",
              Item: {
                viewItem: "View details for {itemName}",
              },
            },
            Common: {
              checkbox: "checkbox",
            },
          },
        }}
        colorScheme="light"
      >
        <Page>
          <Card>
            <ResourceList
              showHeader
              items={[
                {
                  id: 341,
                  url: "customers/341",
                  name: "Mae Jemison",
                  location: "Decatur, USA",
                },
                {
                  id: 256,
                  url: "customers/256",
                  name: "Ellen Ochoa",
                  location: "Los Angeles, USA",
                },
              ]}
              renderItem={(item) => {
                const { id, url, name, location } = item;
                const media = <Avatar customer size="medium" name={name} />;

                return (
                  <ResourceList.Item id={id} url={url} media={media}>
                    <h3>
                      <TextStyle variation="strong">{name}</TextStyle>
                    </h3>
                    <div>{location}</div>
                  </ResourceList.Item>
                );
              }}
            />
          </Card>
          <Form>
            <FormLayout>
              <Checkbox label="Sign up for the Polaris newsletter" />

              <TextField
                label="Email"
                type="email"
                autoComplete="email"
                helpText={
                  <span>
                    We’ll use this email address to inform you on future changes
                    to Polaris.
                  </span>
                }
              />
            </FormLayout>
          </Form>
        </Page>
      </AppProvider>
      
    </div>
  );
}

export default App;
