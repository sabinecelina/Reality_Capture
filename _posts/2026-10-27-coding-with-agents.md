---
layout: page
title:  "We used to understand the computer. Now it has to understand us."
date:   2026-10-26 16:21:00 +0530
categories: ["general"]
---

Traditional code is deterministic. <code>MOV AL, 2</code> assembles to <code>B0 02</code> today, tomorrow, and on every machine with that instruction set. Run the same program on the same input twice and you get the same output. When you don’t, we call it a bug and go looking for it.

Jahrelang haben wir uns die Logik zu Nutze gemacht. Die Informatik bestand aus imperativen Progrqammiersprachen mit einer exakt definierten Syntax und Semantik. 

<h2>Seventy years of giving up control</h2>
<p>The history of programming is a history of handing control to the machine, one layer at a time. Each time we gave up control over <em>how</em> something gets done, and kept the <em>what</em> exact, because something formal sat underneath.</p>
<div class="kt-scroll"><table class="kt-table">
<thead><tr><th>Layer</th><th>What you stopped deciding</th><th>What stayed exact</th></tr></thead>
<tbody>
<tr><td>Assembly, 1950s</td><td>Hand-encoding opcodes</td><td>One mnemonic maps to one opcode</td></tr>
<tr><td>FORTRAN, 1957</td><td>Registers and instruction selection</td><td>A grammar in BNF: one valid parse per line</td></tr>
<tr><td>SQL, 1970s</td><td>How rows get fetched</td><td>A schema that fixes every column and type</td></tr>
<tr><td>ORMs and GC, 2000s</td><td>Writing the SQL, freeing the memory</td><td>Types and the API contract</td></tr>
<tr class="kt-new"><td>LLMs, 2023+</td><td>The how, and now the exact what</td><td>No formal layer, just natural language</td></tr>
</tbody></table></div>

<p>LLMs are the first abstraction where that formal layer is gone. We describe the <em>what</em> in natural language, and natural language is ambiguous.</p>
<p>Take this sentence: “If the beer is cold, drink it. Otherwise, put it in the fridge.” In code it is a few lines and does one thing. As a prompt it has a dozen readings. How cold is “cold”? Which fridge? The whole beer or a sip? What if there is no beer? Ask an agent three times and you can get three different programs:</p>
<div class="kt-variants">
<div class="kt-variant a"><b>Literal and minimal</b><pre class="kt-code"><code><span class="kw">if</span> (beer.temp &lt; 8)
  <span class="fn">drink</span>(beer);
<span class="kw">else</span>
  fridge.<span class="fn">add</span>(beer);</code></pre></div>
<div class="kt-variant b"><b>Over-engineered</b><pre class="kt-code"><code><span class="kw">if</span> (!beer)
  <span class="kw">return</span> <span class="fn">suggest</span>("soda");
<span class="kw">if</span> (beer.celsius &lt;= 5)
  <span class="kw">return</span> <span class="fn">drink</span>(beer);
kitchen.fridge.<span class="fn">store</span>(beer);
reminder.<span class="fn">set</span>("check 2h");</code></pre></div>
<div class="kt-variant c"><b>Another reading entirely</b><pre class="kt-code"><code><span class="cm">// "cold" = guessed 7°C</span>
<span class="kw">const</span> COLD = 7;
<span class="kw">if</span> (<span class="fn">getTemp</span>(beer) &lt; COLD)
  <span class="fn">pour</span>(beer, glasses = 2);
<span class="kw">else</span>
  <span class="fn">nearestFridge</span>().<span class="fn">put</span>(beer);</code></pre></div>
</div>
<p>None of these is wrong. Each one fills the gaps you left open with a guess.</p>
<p class="kt-pull">“We used to have to understand the computer. <span>Now the computer has to understand us.</span>”</p>
<p>That sounds like progress, and it is. But “understand” is doing a lot of work in that sentence. The compiler used to reject ambiguity, so you were forced to be precise. Now the model resolves the ambiguity itself, silently, with a guess. The ambiguity didn’t go away. It moved somewhere you can’t see it.</p>
<h2>Two systems</h2>
<p>Kahneman’s <em>Thinking, Fast and Slow</em> describes two modes of thinking.</p>
<div class="kt-systems">
<div class="kt-sys"><b>System 1</b><i>Fast, automatic, effortless</i><p>Reads a face and knows: angry.</p><p>Types the code your hands already know.</p></div>
<div class="kt-sys two"><b>System 2</b><i>Slow, deliberate, effortful</i><p>Works out 17 × 24 step by step.</p><p>Decides what to build, and how.</p></div>
</div>
<p>System 1 never switches off, and it answers even when it shouldn’t. The famous test: a bat and a ball cost $1.10 together, and the bat costs $1.00 more than the ball. How much is the ball? Almost everyone hears “10 cents.” It feels obvious, and it’s wrong: the ball costs 5 cents. In Kahneman’s account, more than half of the students at Harvard, MIT and Princeton gave the intuitive answer. System 1 produced a confident reply and nobody asked System 2 to check it.</p>
<p>The mechanism he calls WYSIATI: <em>what you see is all there is</em>. System 1 builds a coherent story from the information in front of it and ignores what is missing. The story feels complete because the gaps are invisible.</p>
<p>An LLM is a WYSIATI machine. It takes your words, produces fluent code, and fills every gap with a confident guess, exactly like System 1 answering the bat-and-ball question. The output looks right, so you are tempted to stay in System 1 yourself.</p>
<h2>“Make the button more visible”</h2>
<p>Recently I told my coding agent exactly that.</p>
<div class="kt-ledger">
<div class="kt-row"><b>What I wrote</b><span>“Make the button more visible.”</span></div>
<div class="kt-row"><b>What I meant</b><span>It gets lost between three grey links in the footer. Put it somewhere else, in a different colour.</span></div>
<div class="kt-row bad"><b>What I got</b><span>A bigger button, still in the footer.</span></div>
</div>
<p>The agent did nothing wrong. It did what I wrote. The mistake was mine: I hadn’t finished the thought, and I hoped the tool would finish it for me. I was treating the model as if it did my System 2 work.</p>
<p>I think this is the real trap of AI-assisted coding, and it has more to do with laziness than with model quality. Kahneman is blunt that System 2 is lazy and follows the law of least effort. Writing code used to force System 2 on you as a side effect, because the compiler rejected whatever you hadn’t thought through. Now there is no error message. There is always an answer, and it is almost right. So the loop becomes: prompt, “close enough,” patch prompt, another patch, and at some point you no longer understand your own project.</p>
<h2>“But reasoning models deliberate”</h2>
<p>They do, and I’m not claiming LLMs can’t reason. But a model deliberates over what is in its context. The information that matters here, what <em>you</em> want, which constraints exist, what “done” means, is often not in the context. It is in your head. No amount of model-side System 2 can recover something that was never written down.</p>
<h2>What I do now</h2>
<p>Before I send a non-trivial prompt, I stop and ask myself:</p>
<ul class="kt-list">
<li>What exactly do I want, in my own words?</li>
<li>What do I know that the model can’t?</li>
<li>How will I recognise that it’s done?</li>
<li>Which gap would I not notice myself?</li>
</ul>
<p>The button prompt becomes:</p>
<p class="kt-prompt">“The button disappears in the footer between grey links. Move it below the form and give it the accent colour. Keep its size.”</p>
<p>That is ten seconds of thinking, and the problem is gone. You can call the result a spec, a few bullet points, or one good sentence. The format matters much less than the order: the thinking happens before the prompt, not after, when you are repairing the result.</p>
<h2>The reversal</h2>
<p>For seventy years we traded control over <em>how</em> for expressiveness, and we could afford it because the <em>what</em> stayed exact. Now the <em>what</em> is the part we hand over in loose language, and the machine fills the gaps for us.</p>
<p>So the sentence flips. The computer now understands us, or at least produces something that looks like understanding. The remaining job is on our side: knowing what we mean. Typing has become nearly free. Thinking hasn’t.</p>
<hr class="kt-end">
<p class="kt-fine">This post grew out of a talk on spec-driven coding I gave at Women in Tech in Freiburg.</p>
</article>