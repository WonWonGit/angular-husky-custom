module.exports = {
  rules: {
    // eslint-disable-next-line max-lines-per-function
    'variable-length': context => ({
      // 변수 선언하는 부분은 VariableDeclarator 이다.
      VariableDeclarator: node => {
        // 변수명은 여기에 있다. (위 json 참고)
        if (node.id.name.length < 2) {
          context.report(
            node,
            `Variable names should be longer than 1 character`
          );
        }
      },
    }),
  },
};
