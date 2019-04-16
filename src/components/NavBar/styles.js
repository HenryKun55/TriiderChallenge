const styles = {
    nav: {
        width: '100%',
        margin: 0,
        color: '#fff',
        boxShadow: '0 5px 2px -2px rgba(0,0,0,.2)'
    },
    navLeft: {
        flexDirection: 'row',
    },
    navCollapse: {
        justifyContent: 'space-evenly',
    },
    navToogle: {
        border: 0,
    },
    navRight: {
        flexDirection: 'row',
    },
    dropDown: {
        position: 'fixed',
        border: 'none',
        right: 0,
        top: 8  
    },
    dropButton: {
        backgroundColor: '#fff', 
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red",
        marginRight: 20
    }
}

export default styles