export const durationCode = [
    {
        indent: 0,
        tokens: [
            { type: 'comment', content: '// Comparación de Duración' },
            { type: 'text', content: '\n' },
            { type: 'comment', content: '// Animación Rápida (2.5s)' }
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
            { type: 'prop', content: 'transition' },
            { type: 'operator', content: '={{' }
        ]
    },
    {
        indent: 2,
        tokens: [
            { type: 'prop', content: 'duration' },
            { type: 'operator', content: ': ' },
            { type: 'number', content: '2.5' },
            { type: 'punctuation', content: ', ' }
        ]
    },
    {
        indent: 2,
        tokens: [
            { type: 'prop', content: 'repeat' },
            { type: 'operator', content: ': ' },
            { type: 'variable', content: 'Infinity' },
            { type: 'punctuation', content: ', ' }
        ]
    },
    {
        indent: 2,
        tokens: [
            { type: 'prop', content: 'repeatType' },
            { type: 'operator', content: ": '" },
            { type: 'string', content: 'reverse' },
            { type: 'operator', content: "'" },
            { type: 'punctuation', content: ', ' }
        ]
    },
    {
        indent: 2,
        tokens: [
            { type: 'prop', content: 'ease' },
            { type: 'operator', content: ": '" },
            { type: 'string', content: 'easeInOut' },
            { type: 'operator', content: "'" }
        ]
    },
    {
        indent: 1,
        tokens: [
            { type: 'operator', content: '}}' }
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'punctuation', content: '/>' }
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'text', content: '\n' }
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'comment', content: '// Animación Lenta (10s)' }
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
            { type: 'prop', content: 'transition' },
            { type: 'operator', content: '={{' }
        ]
    },
    {
        indent: 2,
        tokens: [
            { type: 'prop', content: 'duration' },
            { type: 'operator', content: ': ' },
            { type: 'number', content: '10' },
            { type: 'punctuation', content: ', ' }
        ]
    },
    {
        indent: 2,
        tokens: [
            { type: 'prop', content: 'repeat' },
            { type: 'operator', content: ': ' },
            { type: 'variable', content: 'Infinity' },
            { type: 'punctuation', content: ', ' }
        ]
    },
    {
        indent: 2,
        tokens: [
            { type: 'prop', content: 'repeatType' },
            { type: 'operator', content: ": '" },
            { type: 'string', content: 'reverse' },
            { type: 'operator', content: "'" },
            { type: 'punctuation', content: ', ' }
        ]
    },
    {
        indent: 2,
        tokens: [
            { type: 'prop', content: 'ease' },
            { type: 'operator', content: ": '" },
            { type: 'string', content: 'easeInOut' },
            { type: 'operator', content: "'" }
        ]
    },
    {
        indent: 1,
        tokens: [
            { type: 'operator', content: '}}' }
        ]
    },
    {
        indent: 0,
        tokens: [
            { type: 'punctuation', content: '/>' }
        ]
    }
];
