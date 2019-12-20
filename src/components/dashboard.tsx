import * as React from "react";
import {StoreContainer} from '../store'
interface Props {}

const dashboard: React.FC<Props> = () => {
    const store = StoreContainer.useContainer()
    return (
          <div>
          </div>
    )
}
export default dashboard