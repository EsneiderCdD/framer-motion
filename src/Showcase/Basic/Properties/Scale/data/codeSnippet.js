export const scaleCode = [
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
            { type: 'prop', content: ' scale' },
            { type: 'operator', content: ': ' },
            { type: 'number', content: '1.5' },
            { type: 'operator', content: ' }}' }
        ]
    },
    {
        indent: 1,
        tokens: [
            { type: 'prop', content: 'animate' },
            { type: 'operator', content: '={{' },
            { type: 'prop', content: ' scale' },
            { type: 'operator', content: ': ' },
            { type: 'number', content: '0' },
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
            { type: 'number', content: '2' },
            { type: 'punctuation', content: ',' },
            { type: 'prop', content: ' repeat' },
            { type: 'operator', content: ': ' },
            { type: 'variable', content: 'Infinity' },
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
            { type: 'text', content: 'Scale' }
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
