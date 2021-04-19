import { memo } from "react";
//propsが変更されない限り、再レンダリングしないという意味

const style = {
  witdth: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされた！");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
