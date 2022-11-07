import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [datas, setDatas] = useState();
  const urlLookup = "http://btax.mandakh.org:8000/lookup/";
  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };
    sendRequest(urlLookup, bodyChiglel);
  }, []);

  const sendRequest = async (url, body) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(async (response) => {
        setDatas(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
    <Topbar data={datas && datas.data[9].chiglelname}/>

    </>
  )
}

