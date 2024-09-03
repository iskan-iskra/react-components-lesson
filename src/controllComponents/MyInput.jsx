import { forwardRef } from "react";

const MyInputCore = (props, ref) => <input type="text" {...props} ref={ref} />;

const MyInput = forwardRef(MyInputCore);

export default MyInput;
