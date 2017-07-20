/**
 * Created by bernardwilliams on 7/15/17.
 */

var questions = [
    {
        fulltext: 'George Washington was the first President',
        missingText: 'George Washington',
        partialText: '... Was the first President of the United States'
    },
    {
        fulltext: 'Barack Obama was the first black President of the United States',
        missingText: 'Barack Obama',
        partialText: '... was the first black President of the United States'
    },
    {
        fulltext: 'Roseanne Bar Should never be allowed to sign the national anthem.',
        missingText: 'Roseanne Bar ',
        partialText: '... should never be allowed to sign the national anthem.'
    },
    {
        fulltext: "I've got 99 problems but a bitch ain't one",
        missingText: '99',
        partialText: "I've got ... problems but a bitch ain't one"
    },
    {
        fulltext: "Green eggs and ham",
        missingText: 'ham',
        partialText: 'Green eggs and ...'
    },
    {
        fulltext: 'I love it when the call me Big Poppa',
        missingText: 'Big Poppa',
        partialText: 'I love it when they call me Big ....'
    }
]

module.exports = questions;