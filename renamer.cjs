const fs = require('fs');

const filesToUpdate = ['gallery.html', 'services.html', 'index.html', 'contact.html', 'src/App.jsx'];
filesToUpdate.forEach(f => {
  if(fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    let modified = false;
    const oldContent = content;
    
    content = content.replace(/([a-zA-Z]+)\s*\(\s*(\d+)\s*\)\.jpg/g, (match, p1, p2) => {
        return `${p1}-${p2}.jpg`;
    });
    
    if (content.includes('capiello geam menu .pdf')) {
      content = content.replace(/capiello geam menu \.pdf/g, 'capiello-geam-menu.pdf');
    }
    if (content.includes('capiello menu 2.pdf')) {
      content = content.replace(/capiello menu 2\.pdf/g, 'capiello-menu-2.pdf');
    }
    if (content.includes('capilo logo.png')) {
       content = content.replace(/capilo logo\.png/g, 'capilo-logo.png');
    }
    
    if (content !== oldContent) {
      fs.writeFileSync(f, content);
      console.log('Updated ' + f);
    }
  }
});
