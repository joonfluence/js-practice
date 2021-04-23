var name = 'zero';
log = () => {
    console.log(name);
}

wrapper = () => {
    var name = 'nero';
    log();
}

wrapper();