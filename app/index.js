import { Image, View, Text} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import styles from "./styles";
import React, { useState, useEffect } from "react";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { Link } from "expo-router";

const DATA = [
  {
    coverImageUri:
    "http://lh5.ggpht.com/-HaJVp89JNtI/Tix0RK5wrgI/AAAAAAAADP8/49h8vFn9huw/x-pedreiro_thumb%25255B1%25255D.jpg?imgmax=800",
    cornerLabelColor: "grey",
    cornerLabelText: "Sanduíche de Picles",
  },
  {
    coverImageUri:
    "http://www.sabornamesa.com.br/media/k2/items/cache/8f704c6e91e045c72378c71d940a59ce_XL.jpg",
    cornerLabelColor: "grey",
    cornerLabelText: "Sanduíche de Picles",
  },
  {
    coverImageUri:
      "http://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/como-fazer-sanduiche-natural-para-vender.jpg",
    cornerLabelColor: "grey",
    cornerLabelText: "Sanduíche de Ovo",
  },
];

const App = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [todosNomes, setTodosNomes] = useState([]);
  const [selecionarNomeProduto, setSelecionarNomeProduto] = useState(""); // CONSTANTE PARA O PICKER
  const [mostrarOutput, setMostrarOutput] = useState(false);

  useEffect(() => {
    getTodosNomes();
  }, []);

  const getTodosNomes = () => {
    axios
      // .get("https://tbnvfcfz-3000.brs.devtunnels.ms/produtos")
      .get("http://localhost:3000/produtos")
      .then((response) => {
        const nomes = response.data.map((item) => item.nome);
        setTodosNomes(nomes);
        setMostrarOutput(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Resgata apenas o produto selecionado.
  const getProdutoSelecionado = () => {
    axios
      // .get(
      //   `https://tbnvfcfz-3000.brs.devtunnels.ms/produtos?nome=${selecionarNomeProduto}`
      // )
      .get(
        `http://localhost:3000/produtos?nome=${selecionarNomeProduto}`
      )
      .then((response) => {
        console.log(response.data);
        setNome(response.data[0].nome);
        setDescricao(response.data[0].descricao);
        setPreco(response.data[0].preco);
        setMostrarOutput(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (selecionarNomeProduto) {
      getProdutoSelecionado();
    }
  }, [selecionarNomeProduto]);

  //Carousel
  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={{ uri: data.coverImageUri }} />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>App Lachonete</Text>
      <View style={styles.container}>
        <Carousel
          pagination={PaginationLight}
          renderItem={renderItem}
          data={DATA}
          loop
          autoplay
        />
      </View>

      <Picker
        selectedValue={selecionarNomeProduto}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setSelecionarNomeProduto(itemValue);
        }}
      >
        {todosNomes.map((nome, index) => (
          <Picker.Item key={index} label={nome} value={nome} />
        ))}
      </Picker>

      <View style={styles.saida}>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          Descrição
        </Text>
        <Link href="/p1">Comprar</Link>

        {descricao && <Text>{descricao}</Text>}
        {preco && <Text>Preço: R${preco} reais</Text>}
      </View>
    </View>
  );
};

export default App;
