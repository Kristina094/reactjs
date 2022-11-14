import { ChargingStation } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import { getUserAsync, urlLookup } from "./settings/settings";
// import { Person } from "@mui/icons-material";
function App() {

  const [datas, setDatas] = useState();

  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };


    getUserAsync(urlLookup, bodyChiglel).then((data) => setDatas(data));



  }, [])

return (
  <>
  <p>{datas && JSON.stringify(datas)}</p>
  <Home />
  </>
)
}
export default App;
