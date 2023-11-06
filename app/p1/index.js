import List from "./flatlist";

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

export default function Page() {
    return (<List data={DATA} />);
}
