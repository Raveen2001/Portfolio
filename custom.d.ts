declare module "*.svg" {
  import React = require("react");
  export default React.FC<React.SVGProps<SVGSVGElement>>;
}
