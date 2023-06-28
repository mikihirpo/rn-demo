/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import Gridlist from "./Gridlist";


const App = () => (
  <View style={{ flex: 1 }}>
    <Text>Hi there</Text>
    <Gridlist/>
    
  </View>
);


export default App;



// import React, { Component } from 'react';
// import { FlatList, View, ActivityIndicator, Text } from 'react-native';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       page: 1,
//       isLoading: false,
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = () => {
//     this.setState({ isLoading: true });
//     const { page } = this.state;
//     // this.setState({
//     //   data: [{name: "dks", fname: "kasld"}]
//     // })

//     fetch(`https://jsonplaceholder.typicode.com/todos`)
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState({
//           data: [...this.state.data, ...responseJson.results],
//           isLoading: false,
//         });
//       })
//       .catch((error) => {
//         console.log("the error")
//         console.log(error)
//       });
//   };

//   handleLoadMore = () => {
//     this.setState({ page: this.state.page + 1 }, () => {
//       this.fetchData();
//     });
//   };

//   renderFooter = () => {
//     return (
//       this.state.isLoading && (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <ActivityIndicator size="large" />
//         </View>
//       )
//     );
//   };

//   render() {
//     return (
//       <FlatList
//         data={this.state.data}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={{ padding: 20 }}>
//             <Text>{item.name} {item.fname}</Text>
//             <Text>{item.name}</Text>
//           </View>
//         )}
//         ListFooterComponent={this.renderFooter}
//         onEndReached={this.handleLoadMore}
//         onEndReachedThreshold={0.1}
//       />
//     );
//   }
// }

// export default App;
