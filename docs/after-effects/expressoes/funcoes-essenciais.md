---
title: Funções Essenciais de Expressões no After Effects
description: Aprenda as funções básicas como wiggle, random, time, loopOut e if/else para começar a usar expressões no After Effects no dia a dia.
---

# Funções Essenciais de Expressões no After Effects  

Agora que você já entendeu como funcionam os valores no After, é hora de colocar a mão na massa. Vou te mostrar as funções mais básicas — aquelas que provavelmente vão ser suas primeiras amigas no mundo das expressões.  

## `wiggle()` – Movimento aleatório  

Essa é a função que quase todo mundo conhece. Serve pra criar variação suave em algum valor.  

```js
wiggle(5, 50)
```  

- O **primeiro número** é a frequência (quantas vezes por segundo o valor muda).  
- O **segundo número** é a amplitude (quanto ele pode variar).  

Na **Opacidade**, por exemplo:  

```js
wiggle(2, 30)
```  

faria a camada oscilar entre clarear e escurecer.  

Na **Posição**:  

```js
wiggle(3, 50)
```  

a camada vai ficar se mexendo em volta da posição original, como se estivesse tremendo.  

💡 Dica: se quiser aplicar só em um eixo, você pode isolar assim:  

```js
x = wiggle(3, 50)[0];
y = value[1];
[x, y];
```  

---

## `random()` – Valor aleatório  

Enquanto o `wiggle` gera um movimento contínuo, o `random` gera valores diferentes a cada frame.  

```js
random(0, 100)
```  

Isso faz o After sortear um número entre 0 e 100 em cada frame.  
É ótimo pra coisas que precisam de variação “maluca”, como um glitch.  

---

## `time` – O tempo em segundos  

O `time` retorna o tempo atual da timeline, em segundos.  

```js
rotation = time * 30;
```  

Esse exemplo gira a camada a 30 graus por segundo, sem precisar de keyframes.  

💡 O segredo é: **`time` sempre retorna só um número**, então se for usar em Position, você precisa transformá-lo em array (lembra do que vimos na introdução).  

---

## `loopOut()` – Repetindo animações  

Você não precisa ficar copiando e colando keyframes pra sempre. O `loopOut` faz isso por você.  

```js
loopOut("cycle")
```  

Com esse código, o After pega a animação que você já fez e continua repetindo em loop.  

Outros modos úteis:  

- `"pingpong"` → vai e volta.  
- `"offset"` → continua a movimentação sempre somando.  
- `"continue"` → estende o movimento além do último keyframe.  

---

## `if / else` – Decisões automáticas  

Às vezes você precisa que uma propriedade mude dependendo do que acontece em outra.  
Por exemplo: trocar a cor de um shape quando outro objeto passa de uma certa posição.  

```js
if (thisComp.layer("Controle").transform.position[0] > 500) {
  [255, 0, 0]; // vermelho
} else {
  [0, 0, 255]; // azul
}
```  

Nesse caso, se a camada chamada **"Controle"** estiver com a posição X maior que 500, o shape fica vermelho.  
Se não, fica azul.  

---

👉 Essas cinco funções já são mais que suficientes pra você começar a brincar e criar coisas úteis.  
O próximo passo é experimentar: muda os números, aplica em propriedades diferentes, quebra um pouco o código e vê o que acontece.  
É assim que tudo começa a fazer sentido.  
