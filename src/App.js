import './App.css';
import Display from './components/display/Display';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
 
  // let data = {
  //   id: 1,
  //   items: [
  //       {
  //           id: 2,
  //           name: "a",
  //           items: []
  //       },
  //       {   id: 3,
  //           name: "b",
  //           items: [
  //           {
  //               id: 5,
  //               name: "ba",
  //               items: [
  //                   {
  //                       id: 8,
  //                       name: "baa",
  //                       items: []
  //                   },
  //                   {   id: 9,
  //                       name: "bab",
  //                       items: []
  //                   },
  //                   {   id: 10,
  //                       name: "bac",
  //                       items: []
  //                   }
  //               ]
  //           },
  //           {   id: 6,
  //               name: "bb",
  //               items: []
  //           },
  //           {   id: 7,
  //               name: "bc",
  //               items: []
  //           }
  //       ]
  //       },
  //       {   id: 4,
  //           name: "c",
  //           items: []
  //       }
  //   ]
  // };

  let data = [
    {
      name: "a",
      parent:"nil",
      type: "folder",
      trash: "no",
      submenu: "yes"
    },
    {
      name: "b",
      parent:"nil",
      type: "folder",
      trash: "no",
      submenu: "yes"
    },
    {
      name: "c",
      parent:"nil",
      type: "folder",
      trash: "no",
      submenu: "no"
    },
    {
      name: "ba",
      parent:"b",
      type: "folder",
      trash: "no",
      submenu: "yes"
    },
    {
      name: "baa",
      parent:"ba",
      type: "folder",
      trash: "no",
      submenu: "no"
    },
    {
      name: "bab",
      parent:"ba",
      type: "folder",
      trash: "no",
      submenu: "no"
    },
    {
      name: "bac",
      parent:"ba",
      type: "folder",
      trash: "no",
      submenu: "no"
    },
    {
      name: "bb",
      parent:"b",
      type: "folder",
      trash: "no",
      submenu: "no"
    },
    {
      name: "bc",
      parent:"b",
      type: "folder",
      trash: "no",
      submenu: "no"
    },
    {
      name: "xyz",
      parent:"a",
      type: "file",
      trash: "no",
    },
]
  
  return (
    <div className="App">
      <Header/>
      <Display data={data}/>
    </div>
  );
}

export default App;
