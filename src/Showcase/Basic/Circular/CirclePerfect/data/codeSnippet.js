export const circlePerfectCode = [
    {
        indent: 0,
        tokens: [
            { type: 'comment', content: '// Generación dinámica de coordenadas' },
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'keyword', content: 'const' },
            { type: 'text', content: ' ' },
            { type: 'variable', content: 'circleMotion' },
            { type: 'operator', content: ' = ' },
            { type: 'function', content: 'generateCircleKeyframes' },
            { type: 'punctuation', content: '(' },
            { type: 'number', content: '40' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '100' },
            { type: 'punctuation', content: ');' },
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'text', content: '' }
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'punctuation', content: '<' },
            { type: 'component', content: 'motion.div' }
        ]
    },
    {
        indent: 1,
        tokens: [
            { type: 'prop', content: 'initial' },
            { type: 'operator', content: '={{' },
            { type: 'prop', content: ' x' },
            { type: 'operator', content: ': ' },
            { type: 'variable', content: 'circleMotion' },
            { type: 'operator', content: '.' },
            { type: 'prop', content: 'x' },
            { type: 'operator', content: '[' },
            { type: 'number', content: '0' },
            { type: 'operator', content: ']' },
            { type: 'punctuation', content: ', ' },
            { type: 'prop', content: 'y' },
            { type: 'operator', content: ': ' },
            { type: 'variable', content: 'circleMotion' },
            { type: 'operator', content: '.' },
            { type: 'prop', content: 'y' },
            { type: 'operator', content: '[' },
            { type: 'number', content: '0' },
            { type: 'operator', content: ']' },
            { type: 'operator', content: ' }}' }
        ]
    },
    {
        indent: 1,
        tokens: [
            { type: 'prop', content: 'animate' },
            { type: 'operator', content: '={{' },
            { type: 'prop', content: ' x' },
            { type: 'operator', content: ': ' },
            { type: 'variable', content: 'circleMotion' },
            { type: 'operator', content: '.' },
            { type: 'prop', content: 'x' },
            { type: 'punctuation', content: ', ' },
            { type: 'prop', content: 'y' },
            { type: 'operator', content: ': ' },
            { type: 'variable', content: 'circleMotion' },
            { type: 'operator', content: '.' },
            { type: 'prop', content: 'y' },
            { type: 'operator', content: ' }}' }
        ]
    },
    {
        indent: 1,
        tokens: [
            { type: 'prop', content: 'transition' },
            { type: 'operator', content: '={{' },
            { type: 'prop', content: ' duration' },
            { type: 'operator', content: ': ' },
            { type: 'number', content: '10' },
            { type: 'operator', content: ' }}' }
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'punctuation', content: '>' }
        ]
    },
    {
        indent: 1,
        tokens: [
            { type: 'text', content: 'Circle' }
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'punctuation', content: '</' },
            { type: 'component', content: 'motion.div' },
            { type: 'punctuation', content: '>' }
        ]
    }
];
