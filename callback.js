console.log('before set time');

setTimeout(() => {
    document.body.style.backgroundColor = 'red'
    setTimeout(() => {
        document.body.style.backgroundColor = 'pink'
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow'
            setTimeout(() => {
                document.body.style.backgroundColor = 'blue'

                setTimeout(() => {
                    document.body.style.backgroundColor = 'lightblue'

                    setTimeout(() => {
                        document.body.style.backgroundColor = 'greeen'

                        setTimeout(() => {
                            document.body.style.backgroundColor = 'darkgreen'

                            setTimeout(() => {
                                console.log('inner');
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);

console.log('after set time');