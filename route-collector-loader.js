
    module.exports = function(source) {
      const route = this.resourcePath
        .replace(/.*/app//, '')
        .replace(//page.(tsx|ts|js|jsx)$/, '')
        .replace(//index$/, '')
        .replace(/\\/g, '/');

      const routesPath = '/Users/jasper/Desktop/Coding/projects/website/.next/routes.json';
      let routes = [];
      try {
        if (fs.existsSync(routesPath)) {
          routes = JSON.parse(fs.readFileSync(routesPath, 'utf-8'));
        }
      } catch (e) {}

      if (!routes.includes(route)) {
        routes.push(route);
        require('fs').mkdirSync(require('path').dirname(routesPath), { recursive: true });
        require('fs').writeFileSync(routesPath, JSON.stringify(routes.sort(), null, 2));
      }

      return source;
    }
  