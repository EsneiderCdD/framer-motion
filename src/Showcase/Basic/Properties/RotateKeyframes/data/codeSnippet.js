export const rotateKeyframesCode = [
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
            { type: 'prop', content: 'animate' },
            { type: 'operator', content: '={{' },
            { type: 'prop', content: ' rotate' },
            { type: 'operator', content: ': [' },
            { type: 'number', content: '0' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '90' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '180' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '270' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '360' },
            { type: 'operator', content: '] }}' }
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
            { type: 'number', content: '4' },
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
            { type: 'string', content: 'mirror' },
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
            { type: 'punctuation', content: '>' }
        ]
    },
    {
        indent: 1,
        tokens: [
            { type: 'text', content: 'Keyframes' }
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
