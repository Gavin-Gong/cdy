import React, { useState, useEffect } from 'react';
import { Button, Snippet, Row, Col, Textarea, Slider } from "@zeit-ui/react"
import cdy from "cdy/dist/lib/cdy"
import styes from './App.module.scss';



function App() {
  const [ inputText, setInputText ] = useState(
`一切都是命运
一切都是烟云
一切都是没有结局的开始
一切都是稍纵即逝的追寻
一切欢乐都没有微笑
一切苦难都没有泪痕
一切语言都是重复
一切交往都是初逢
一切爱情都在心里
一切往事都在梦中
一切希望都带着注释
一切信仰都带着呻吟
一切爆发都有片刻的宁静
一切死亡都有冗长的回声`)
  const [ seed, setSeed ] = useState(0.3)
  const [ outputText, setOutputText ] = useState(cdy(inputText, seed))
  const handleGenerate = () => {
    setOutputText(cdy(inputText, seed))
  }

  return (
    <div className="App">
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <div className={styes.contentBlock}>
            <Snippet text={["yarn add cdy -S", "cdy(text, seed)"]} />
          </div>
          <Textarea width="100%" minHeight={'320px'} value={inputText} onChange={e => setInputText(e.target.value)}/>
          <div className={styes.contentBlock}>
            <Slider min={0} max={1} step={0.1} value={seed} onChange={v => setSeed(v)}></Slider>
          </div>
          <div className={styes.contentBlock} style={{ textAlign: "center" }}>
            <Button size={'small'} onClick={handleGenerate} type="secondary" shadow>generate</Button>
          </div>
          <div className={styes.contentBlock}>
            <Snippet text={outputText} />
          </div>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default App;
