//import Alert from "./components/Alert";
//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // let items = ["Yasir", "Yastec", "Ola", "Amala"];
  //const handleSelectItem = (item: string) => {
  //  console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // );

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alerts </Alert>
      )}
      <Button colour="primary" onClick={() => setAlertVisibility(true)}>
        Click Here Dear
      </Button>
    </div>
  );
}

export default App;
