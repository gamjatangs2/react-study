import React from 'react'

//# 컴포넌트(components)
// 재사용 가능한 독립적인 코드 단위
// HTML, CSS, JS/TS

interface Props {
    color: string;
    name?: string;
}

const Index: React.FC<Props> = ({ color, name = '이름없음' }) => {
  return (
    <>
        <div style={{color}}>components, {name}</div>
    </>
  );
};

// Index.defaultProps = {
//     name: '이름없음'
// }

export default Index;
