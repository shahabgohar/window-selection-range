/**
 *
 * https://javascript.info/selection-range#range
 *
 *  range is essentially a set of boundry points ( start and end )
 *  it starts with 0
 */
/**
 *  range.setStart(node, offset)
 *  range.setEnd(node, offset)
 *
 * if the start node is text node then the offset must be the position in text
 */
function selectingTextPartially() {

    let node = document.getElementById('selecting-the-text-partially')

    let range = new Range()

    range.setStart(node.firstChild, 0)
    range.setEnd(node.firstChild, 4)

    let result = document.getElementById('selecting-the-text-partially-result')
    result.innerHTML = range.toString()
}

/**
 * alternatively if node is an element node then
 * offset must be the child number
 */
function selectingNodeElements() {

    let node = document.getElementById('selecting-element-nodes')

    let range = new Range()

    range.setStart(node,1)
    range.setEnd(node, 2)

    let result = document.getElementById('selecting-element-nodes-result')
    result.innerHTML = range.toString()

    document.getSelection().removeAllRanges()
    document.getSelection().addRange(range)
}

function selectingBiggerFragment() {
    let node = document.getElementById('selecting-bigger-fragment')

    let range = new Range()

    range.setStart(node.firstChild,2)
    range.setEnd(node.querySelector('b').firstChild, 2)

    let result = document.getElementById('selecting-bigger-fragment-result')
    result.innerHTML = range.toString()

    document.getSelection().removeAllRanges()
    document.getSelection().addRange(range)
}