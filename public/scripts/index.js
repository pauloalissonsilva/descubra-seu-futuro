const IndexFunctions = {
  generateAnswer() {
    const possibleAnswers = [
      "Absolutamente!",
      "Eu não teria tanta certeza..",
      "Sim, com certeza!",
      "você não deve contar com isso.",
      "Sem duvida!",
      "Tente perguntar mais tarde..",
      "Sim,totalmente!",
      "Minha resposta é não.",
      "Você pode contar com isso.",
      "É melhor não te dizer.",
      "Eu diria que sim.",
      "Minhas fontes estão me dizendo que não.",
      "Provavélmente.",
      "Eu não posso dizer por enquanto.",
      "Sim!.",
      "Respire, e pergunte novamente.",
      "Os sinais indicam que não.",
    ];
    const possibilities = Math.random() * (possibleAnswers.length - 1);

    return possibleAnswers[Math.round(possibilities)];
  },
};

export default IndexFunctions;