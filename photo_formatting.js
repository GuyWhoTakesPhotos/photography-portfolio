function fourWide(imgFolder, dictName) {
    // -- ||
    // -- ||
    // -- --
    // -- --
    // || --
    // || --

    // all used variables
    var numOfRows = Math.round(dictName.length / 4) * 2 + 1
    let imgParent = document.getElementById('imgParent')

    let rowSpan = 0
    let colSpan = 0

    let vRowPlace = 1
    let vColPlace = 3
    let hRowPlace = 1
    let hColPlace = 1

    let vCount = 0
    let hCount = 0
    let tCount = 0
    let mCount = 0

    // just for landscape photos
    let modNum = 4
    let modEqual = 0

    imgParent.style.gridTemplateRows = ("repeat(" +numOfRows+", 314px)")
    if (screen.width <= 800) {
        imgParent.style.gridTemplateRows = ("repeat(" +(dictName.length)*1.3+", 314px)")
    }

    for (let i=0; i < dictName.length; i++) {
        if (screen.width <= 800) {
            mobileLayout(imgFolder, dictName) 
            break
        }
        tCount++

        // figuring out the location of 9/16 img
        if (vCount > 0 && dictName[i].photoRatio == 916) {
            if (vCount % 2 == 0) {
                vRowPlace += 4
                if (vColPlace == 4) {vColPlace = 1} else {vColPlace++}
                
            } else {
                vColPlace ++
            }
        }

        // figuring out the location of 16/9 img
        if (hCount > 0 && dictName[i].photoRatio == 169) {
            if (hCount % modNum == modEqual) {
                if (hColPlace == 1) {
                    hColPlace = 3
                } else {
                    hColPlace = 1
                }
                hRowPlace --
            } else {hRowPlace ++}
        }



        // figuring out the size of img for styling
        if (dictName[i].photoRatio == 916) {
            rowSpan = 2 
            colSpan = 1 
            vCount ++
        } else {
            rowSpan = 1
            colSpan = 2
            hCount ++
        }

        if (screen.width <= 800) {
            colSpan = 1
            mCount ++
            vColPlace = 1
            hColPlace = 1
            if (tCount > 1) {
                if (dictName[(i-1)].photoRatio == 916) {
                    mCount ++
                }
            }
            hRowPlace = mCount
            vRowPlace = mCount
        }

        // creates div, gives element a location, adds to cite
        var imgWrapper = document.createElement('div')
        if (dictName[i].photoRatio == 916) {
            imgWrapper.style.gridArea = `${vRowPlace} / ${vColPlace} / span ${rowSpan} / span ${colSpan}`
        } else {
            imgWrapper.style.gridArea = `${hRowPlace} / ${hColPlace} / span ${rowSpan} / span ${colSpan}`
        }
        imgParent.appendChild(imgWrapper)

        // creates img element, gives it img data, adds to cite
        var myImg = document.createElement('img')
        myImg.src = imgFolder + dictName[i].photoPath
        myImg.src.replace('http://127.0.0.1:5500', '')
        myImg.loading = 'lazy'
        myImg.className = "_" + dictName[i].photoRatio
        myImg.alt = dictName[i].photoName
        imgWrapper.appendChild(myImg)

        // changes the varibles for the landspae row, as number in column changes
        modNum = 6
        modEqual = 4
    }
    imgFade() //cool fade fucntion
    clickPopUp() // popup function 
}

function switchUp(imgFolder, dictName) {
    // -- ||
    // -- ||
    // || --
    // || --
    
    // all used variables
    var numOfRows = Math.round(dictName.length / 4) * 2 + 1
    let imgParent = document.getElementById('imgParent')

    let rowSpan = 0
    let colSpan = 0

    let vRowPlace = 1
    let vColPlace = 3
    let hRowPlace = 1
    let hColPlace = 1

    let vCount = 0
    let hCount = 0
    let tCount = 0
    let mCount = 0


    imgParent.style.gridTemplateRows = ("repeat(" +numOfRows+", 314px)")
    if (screen.width <= 800) {
        imgParent.style.gridTemplateRows = ("repeat(" +(dictName.length)*1.3+", 314px)")
    }

    // places extra imgs if on computer
    if (screen.width > 800) {
        var [usedImgs, rNewStart] = placingExtras(imgFolder, dictName, 1)
        
        // update positions
        vRowPlace =  rNewStart
        hRowPlace =  rNewStart
    }

    for (let i=0; i < dictName.length; i++) {
        if (screen.width <= 800) {
            mobileLayout(imgFolder, dictName) 
            break
        }
        // skips any imgs that are already placed
        if (usedImgs) {
            if (usedImgs.includes(dictName[i])) {continue}
        }
        tCount++

        // figuring out the location of 9/16 img
        if (vCount > 0 && dictName[i].photoRatio == 916) {
            if (vCount % 2 == 0) {
                vRowPlace += 2
                if (vColPlace == 4) {vColPlace = 1} else {vColPlace++}
                
            } else {
                vColPlace ++
            }
            
        }
        

        // figuring out the location of 16/9 img
        if (hCount > 0 && dictName[i].photoRatio == '169') {
            hRowPlace++
            if (hCount % 2 == 0) {
                switch (hColPlace) {
                    case 3:
                        hColPlace = 1
                        break
                    case 1:
                        hColPlace = 3
                        break
                    default:
                        hColPlace = 0
                }
            } 
        }

        // figuring out the size of img for styling
        if (dictName[i].photoRatio == "916") {
            rowSpan = 2 
            colSpan = 1 
            vCount ++
        } else {
            rowSpan = 1
            colSpan = 2
            hCount ++
        }

        if (screen.width <= 800) {
            colSpan = 1
            mCount ++
            vColPlace = 1
            hColPlace = 1
            if (tCount > 1) {
                if (dictName[(i-1)].photoRatio == '916') {
                    mCount ++
                }
            }
            hRowPlace = mCount
            vRowPlace = mCount
        }

        // creates div, gives element a location, adds to cite
        var imgWrapper = document.createElement('div')
        if (dictName[i].photoRatio == '916') {
            imgWrapper.style.gridArea = `${vRowPlace} / ${vColPlace} / span ${rowSpan} / span ${colSpan}`
        } else {
            imgWrapper.style.gridArea = `${hRowPlace} / ${hColPlace} / span ${rowSpan} / span ${colSpan}`
        }
        imgParent.appendChild(imgWrapper)

        // creates img element, gives it img data, adds to cite
        var myImg = document.createElement('img')
        myImg.src = imgFolder + dictName[i].photoPath
        myImg.src.replace('http://127.0.0.1:5500', '')
        myImg.loading = 'lazy'
        myImg.className = "_" + dictName[i].photoRatio
        myImg.alt = dictName[i].photoName
        imgWrapper.appendChild(myImg)
    }
    imgFade() // cool fade
    clickPopUp() // popup function
}

// Using this when there are extra photos at the end of page
function placingExtras(folderUsed, dictUsed, ratio) {
    // vars used
    let vNum = 0
    let hNum = 0
    let difference = 0
    let rowPlace = 1
    let colPlace = 1
    var alreadyPlaced = []

    // checking count of each photo ratio 
    for (let j=0; j < dictUsed.length; j++) {
        switch (dictUsed[j].photoRatio) {
            case 916:
                vNum++
                break
            case 169:
                hNum++
                break
            default:
                console.log('error', dictUsed[j])
        }
    }

    difference = (hNum * ratio) - (vNum * ratio) // raito variable not useful yet
    if (difference > 0) { // more landscape photos if positive
        for (let i = 0;i < dictUsed.length;i++) {

            // exits for loop once both all extra photos are placed and all used rows are full
            if (alreadyPlaced.length >= difference 
                && alreadyPlaced.length % 2 == 0 ) {break}

            // checks if the current photo is landscape
            if (dictUsed[i].photoRatio == 169) {
                alreadyPlaced.push(dictUsed[i]) // adds info so it can be skipped

                // creates a div, gives its location, adds it to cite
                var imgWrapper = document.createElement('div')
                imgWrapper.style.gridArea = `${rowPlace} / ${colPlace} / span 1 / span 2`
                imgParent.appendChild(imgWrapper)

                // creates an img element, links extra img, add data for styling and pop up, adds it to cite
                var myImg = document.createElement('img')
                myImg.src = folderUsed + dictUsed[i].photoPath
                myImg.src.replace('http://127.0.0.1:5500', '')
                myImg.loading = 'lazy'
                myImg.className = dictUsed[i].photoRatio
                myImg.alt = "_" + dictUsed[i].photoName
                imgWrapper.appendChild(myImg)

                // moves next img to next row every 2 imgs
                if (alreadyPlaced.length % 2 == 0) {
                    rowPlace ++
                }

                // swaps the column the img is in
                if (alreadyPlaced.length > 0) {
                    if (colPlace == 1) {
                        colPlace = 3
                    } else {
                        colPlace = 1
                    }
                }
            
            }
        }
    } else if (difference < 0) { // more portrait if negative
        for (let i = 0;i < dictUsed.length;i++) {

             // exits for loop once both all extra photos are placed and all used rows are full
            if (alreadyPlaced.length >= Math.abs(difference) 
                && alreadyPlaced.length % 4 == 0) {break}

            // checks if the current photo is portarit
            if (dictUsed[i].photoRatio == 916) {
                alreadyPlaced.push(dictUsed[i]) // adds info so it can be skipped

                // creates a div, gives its location, adds it to cite
                var imgWrapper = document.createElement('div')
                imgWrapper.style.gridArea = `${rowPlace} / ${colPlace} / span 2 / span 1`
                imgParent.appendChild(imgWrapper)

                // creates an img element, links extra img, add data for styling and pop up, adds it to cite
                var myImg = document.createElement('img')
                myImg.src = folderUsed + dictUsed[i].photoPath
                myImg.src.replace('http://127.0.0.1:5500', '')
                myImg.loading = 'lazy'
                myImg.className = "_" + dictUsed[i].photoRatio
                myImg.alt = dictUsed[i].photoName
                imgWrapper.appendChild(myImg)

                // moves next img to next row every 4 imgs
                if (alreadyPlaced.length % 4 == 0) {
                    rowPlace += 2
                }

                // reset column to 1 if last img in row
                if (alreadyPlaced.length > 0) {
                    if (colPlace == 4) {
                        colPlace = 1
                    } else {
                        colPlace++
                    }
                }
            }
        }
    }
    return [alreadyPlaced,rowPlace] // sends the used imgs and the current row to format function
}
function mobileLayout(folder, dict){
    const width = Math.floor(screen.width - (screen.width * 0.16))
    imgParent.style.display = 'flex'
    imgParent.style.flexDirection = 'column'
    
    
    for (let i = 0; i < dict.length; i++) {
        let height = width * (9/16)
        if (dict[i].photoRatio == 916) {
            height = width * (16/9)
        }
        console.log(width, height)
        var imgWrapper = document.createElement('div')
        imgWrapper.style.width = width + 'px'
        imgWrapper.style.height = height + 'px'
        imgParent.appendChild(imgWrapper)

        // creates img element, gives it img data, adds to cite
        var myImg = document.createElement('img')
        myImg.src = folder + dict[i].photoPath
        myImg.src.replace('http://127.0.0.1:5500', '')
        myImg.loading = 'lazy'
        myImg.className = "_" + dict[i].photoRatio
        myImg.alt = dict[i].photoName
        imgWrapper.appendChild(myImg)
    }
}