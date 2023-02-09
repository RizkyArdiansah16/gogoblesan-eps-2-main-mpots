let targetObject1 = document.getElementById('targetObject1')
let targetObject2 = document.getElementById('targetObject2')
let selection = document.getElementById('selection')
let input = document.getElementById('inputValue')

function update() {
    switch (selection.selectedIndex) {
        case 1:
            return targetObject1.style.backgroundColor = input.value
        case 2:
            return targetObject2.style.color = input.value
        case 3:
            return targetObject2.style.fontSize = `${input.value}px`
        case 4:
            return targetObject2.style.fontFamily = input.value
        case 5:
            return targetObject1.style.width = `${input.value}px`
        case 6:
            return targetObject1.style.height = `${input.value}px`

    }
}

