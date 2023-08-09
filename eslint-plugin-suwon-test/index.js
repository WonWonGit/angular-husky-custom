module.exports = {
  rules: {
    'variable-camel': context => ({
      VariableDeclarator: node => {
        if (node.id.name.match(/[\s_-]/g)) {
          context.report(node, `No Camel`);
        }
      },
    }),
    'variable-length': context => ({
      VariableDeclarator: node => {
        if (node.id.name.length < 2) {
          context.report(
            node,
            `Variable names should be longer than 1 character`
          );
        }
      },
    }),
    'interface-name': context => ({
      TSInterfaceDeclaration: node => {
        if (node.id.name.charAt(0) !== 'I') {
          context.report(node, `interface start I`);
        }
      },
    }),
  },
};
