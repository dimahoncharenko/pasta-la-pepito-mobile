import { Tabs } from "./Tabs"
import { Text } from "./Text"

export const DeliveryMethods = () => {
  return (
    <>
      <Tabs tabs={["Доставка", "Самовивіз"]}>
        {(Tab) => (
          <>
            <Tab tab="Доставка">
              <Text>Hello</Text>
            </Tab>
            <Tab tab="Самовивіз">
              <Text>Bye</Text>
            </Tab>
          </>
        )}
      </Tabs>
    </>
  )
}
