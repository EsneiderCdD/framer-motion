export const opacityKeyframesCode = [
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
            { type: 'prop', content: ' opacity' },
            { type: 'operator', content: ': [' },
            { type: 'number', content: '1' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '0.5' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '0' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '0.5' },
            { type: 'punctuation', content: ', ' },
            { type: 'number', content: '1' },
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
            { type: 'number', content: '2' },
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
