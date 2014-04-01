
<div class="text_cell_render border-box-sizing rendered_html">
<p>This is the last post of this year, so I try to do my best to give you something interesting to think about...</p>
<p>In this case, I will show you <em>my git workflow</em>... and you know there are a lot of workflows out there... and probably better than mine, but I just want to share with you the place where I find myself comfortable.</p>
<p>And yes... <em>my git workflow</em> is also powered by <strong>IPython</strong> (I am very repetitive when I love a project!). And it is a <em>semi-automatic</em> one, using the <strong>IPython</strong> notebooks (<em>ipynbs</em>) as a sort of templates, transforming them into a new conceptual entity: the <strong>ipytmpl</strong> (and yes, I love to invent names too!). <!-- TEASER_END --></p>
<p>Because my workflow have essentially two cycles, in this post, I will show you the general set up of the environment and the first <em>Short</em> cycle, leaving the second <em>Extended</em> cycle (and other details) for other post (after the new year, of course).</p>
<p>I will also show you my workflow with a <em>real</em> <strong>PR</strong> (pull-request) to the <strong>IPython</strong> project.</p>
<p>Are you ready? Here we go...</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Get-everything-ready...">Get everything ready...<a class="anchor-link" href="#Get-everything-ready...">&#182;</a></h2>
</div>

<div class="text_cell_render border-box-sizing rendered_html">
<p>First, we need to set up the environment to make our work:</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Check the current working directory:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">pwd</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt output_prompt">
    Out[1]:</div>
<div class="box-flex1 output_subarea output_pyout">


<pre>
u&apos;/media/datos/Desarrollos&apos;
</pre>

</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Make a new folder to isolate our work and cd into it:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[2]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">!</span>mkdir devel_example
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[3]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">cd</span> <span class="n">devel_example</span><span class="o">/</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
/media/datos/Desarrollos/devel_example

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote>
<p><strong>NOTE</strong>: You can avoid these steps opening the notebook in the proper directory, but in this case I want to have the example isolated to not overwrite my current development environment.</p>
</blockquote>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Load variables with useful information:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[4]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">project_name</span> <span class="o">=</span> <span class="s">&quot;ipython&quot;</span>
<span class="n">project_remote</span> <span class="o">=</span> <span class="s">&quot;git://github.com/ipython/ipython.git&quot;</span>
<span class="n">project_remote_name</span> <span class="o">=</span> <span class="s">&quot;origin&quot;</span>
<span class="n">my_fork_remote</span> <span class="o">=</span> <span class="s">&quot;git@github.com:damianavila/ipython.git&quot;</span>
<span class="n">my_fork_remote_name</span> <span class="o">=</span> <span class="s">&quot;damianavila&quot;</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Clone the project and connect the local repo with my <strong>Github</strong> fork:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[5]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Get a read-only copy of the project</span>
<span class="o">!</span>git clone <span class="nv">$project_remote</span>

<span class="c"># cd into the local project folder</span>
<span class="o">%</span><span class="k">cd</span> <span class="err">$</span><span class="n">project_name</span>

<span class="c"># Link the local repo with my Github fork</span>
<span class="o">!</span>git remote add <span class="nv">$my_fork_remote_name</span> <span class="nv">$my_fork_remote</span>

<span class="c"># Check remotes</span>
<span class="o">!</span>git remote -v
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
Clonar en «ipython»...
remote: Reusing existing pack: 96757, done.[K
remote: Counting objects: 82, done.[K
remote: Compressing objects:   1% (1/82)   [K
Receiving objects:   0% (1/96839)   
Receiving objects: 100% (96839/96839), 40.57 MiB | 726 KiB/s   
Resolving deltas:   0% (0/70554)   
/media/datos/Desarrollos/devel_example/ipython
damianavila	git@github.com:damianavila/ipython.git (fetch)
damianavila	git@github.com:damianavila/ipython.git (push)
origin	git://github.com/ipython/ipython.git (fetch)
origin	git://github.com/ipython/ipython.git (push)

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote>
<p><strong>NOTE</strong>: A lot of <em>git workflows</em> use <code>origin</code> to point to our fork and <code>upstream</code> to point to the project repo. But <em>I do not like</em> that configuration. It seems more natural to me to clone the project repo (the <code>origin</code> repo) and add a connection to my fork called <code>damianavila</code>... and the next steps take into consideration this last approach.</p>
</blockquote>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Short-cycle">Short cycle<a class="anchor-link" href="#Short-cycle">&#182;</a></h2>
</div>

<div class="text_cell_render border-box-sizing rendered_html">
<p>This short cycle just create a new <em>branch</em> to work on, make the needed changes in the source code and upload the local changes to our <strong>Github</strong> fork to finally submit a <em>pull-request</em>:</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Set up the <code>master</code> and <code>development</code> branch names:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[6]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">master_branch</span> <span class="o">=</span> <span class="s">&quot;master&quot;</span>
<span class="n">feature_branch</span> <span class="o">=</span> <span class="s">&quot;doc_post_serve&quot;</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Create a new branch from <code>master</code>:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[7]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Make sure we are in master branch</span>
<span class="o">!</span>git checkout <span class="nv">$master_branch</span>

<span class="c"># Pull the changes from origin/master</span>
<span class="o">!</span>git pull <span class="nv">$project_remote_name</span>

<span class="c"># Start a new branch to work on</span>
<span class="o">!</span>git checkout -b <span class="nv">$feature_branch</span>

<span class="c"># Check where we are</span>
<span class="o">!</span>git status
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
Ya está en «master»
Already up-to-date.
Switched to a new branch &apos;doc_post_serve&apos;
# En la rama doc_post_serve
nothing to commit, working directory clean

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Make the changes you want to do:</li>
</ul>
<blockquote>
<p><strong>NOTE</strong>: In this example, I will update the <strong>IPython</strong> docs about some details using the <strong>IPython slides</strong> and the <code>post-serve</code> post-processor (<code>IPython.nbconvert</code>).</p>
</blockquote>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[9]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># list the files structure to find the needed files</span>
<span class="o">%</span><span class="k">ls</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
CONTRIBUTING.md  <span class="ansibold ansiblue">examples</span>/   MANIFEST.in  setupbase.py  <span class="ansibold ansigreen">setup.py</span>*
COPYING.txt      <span class="ansibold ansiblue">git-hooks</span>/  README.rst   <span class="ansibold ansigreen">setupegg.py</span>*  <span class="ansibold ansiblue">tools</span>/
<span class="ansibold ansiblue">docs</span>/            <span class="ansibold ansiblue">IPython</span>/    <span class="ansibold ansiblue">scripts</span>/     <span class="ansibold ansiblue">setupext</span>/     tox.ini

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[10]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">load</span> <span class="n">docs</span><span class="o">/</span><span class="n">source</span><span class="o">/</span><span class="n">interactive</span><span class="o">/</span><span class="n">nbconvert</span><span class="o">.</span><span class="n">rst</span>
<span class="c"># After executing %load, a new cell containing the source code will be added.</span>
<span class="c"># Be sure to add the next line (with the proper path) to overwrite the file</span>
<span class="c"># with you changes.</span>
<span class="c">#</span>
<span class="c"># %%writefile docs/source/interactive/nbconvert.rst</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[11]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%%</span><span class="k">writefile</span> <span class="n">docs</span><span class="o">/</span><span class="n">source</span><span class="o">/</span><span class="n">interactive</span><span class="o">/</span><span class="n">nbconvert</span><span class="o">.</span><span class="n">rst</span>
<span class="o">..</span> <span class="n">_nbconvert</span><span class="p">:</span>

<span class="n">Converting</span> <span class="n">notebooks</span> <span class="n">to</span> <span class="n">other</span> <span class="n">formats</span>
<span class="o">=====================================</span>

<span class="n">Newly</span> <span class="n">added</span> <span class="ow">in</span> <span class="n">the</span> <span class="mf">1.0</span> <span class="n">release</span> <span class="n">of</span> <span class="n">IPython</span> <span class="ow">is</span> <span class="n">the</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">tool</span><span class="p">,</span> <span class="n">which</span> 
<span class="n">allows</span> <span class="n">you</span> <span class="n">to</span> <span class="n">convert</span> <span class="n">an</span> <span class="sb">``</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="n">notebook</span> <span class="n">document</span> <span class="nb">file</span> <span class="n">into</span> <span class="n">various</span> <span class="n">static</span> 
<span class="n">formats</span><span class="o">.</span> 

<span class="n">Currently</span><span class="p">,</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="ow">is</span> <span class="n">provided</span> <span class="k">as</span> <span class="n">a</span> <span class="n">command</span> <span class="n">line</span> <span class="n">tool</span><span class="p">,</span> <span class="n">run</span> <span class="k">as</span> <span class="n">a</span> <span class="n">script</span> 
<span class="n">using</span> <span class="n">IPython</span><span class="o">.</span> <span class="n">A</span> <span class="n">direct</span> <span class="n">export</span> <span class="n">capability</span> <span class="kn">from</span> <span class="nn">within</span> <span class="nn">the</span> 
<span class="n">IPython</span> <span class="n">Notebook</span> <span class="n">web</span> <span class="n">app</span> <span class="ow">is</span> <span class="n">planned</span><span class="o">.</span> 

<span class="n">The</span> <span class="n">command</span><span class="o">-</span><span class="n">line</span> <span class="n">syntax</span> <span class="n">to</span> <span class="n">run</span> <span class="n">the</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">script</span> <span class="ow">is</span><span class="p">::</span>

  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="o">--</span><span class="n">to</span> <span class="n">FORMAT</span> <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span>

<span class="n">This</span> <span class="n">will</span> <span class="n">convert</span> <span class="n">the</span> <span class="n">IPython</span> <span class="n">document</span> <span class="nb">file</span> <span class="sb">``</span><span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="n">into</span> <span class="n">the</span> <span class="n">output</span> 
<span class="n">format</span> <span class="n">given</span> <span class="n">by</span> <span class="n">the</span> <span class="sb">``</span><span class="n">FORMAT</span><span class="sb">``</span> <span class="n">string</span><span class="o">.</span>

<span class="n">The</span> <span class="n">default</span> <span class="n">output</span> <span class="n">format</span> <span class="ow">is</span> <span class="n">html</span><span class="p">,</span> <span class="k">for</span> <span class="n">which</span> <span class="n">the</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span><span class="sb">``</span> <span class="n">argument</span> <span class="n">may</span> <span class="n">be</span> 
<span class="n">omitted</span><span class="p">::</span>
  
  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span>

<span class="n">IPython</span> <span class="n">provides</span> <span class="n">a</span> <span class="n">few</span> <span class="n">templates</span> <span class="k">for</span> <span class="n">some</span> <span class="n">output</span> <span class="n">formats</span><span class="p">,</span> <span class="ow">and</span> <span class="n">these</span> <span class="n">can</span> <span class="n">be</span>
<span class="n">specified</span> <span class="n">via</span> <span class="n">an</span> <span class="n">additional</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span><span class="sb">``</span> <span class="n">argument</span><span class="o">.</span>

<span class="n">The</span> <span class="n">currently</span> <span class="n">supported</span> <span class="n">export</span> <span class="n">formats</span> <span class="n">are</span><span class="p">:</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">html</span><span class="sb">``</span>

  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">full</span><span class="sb">``</span> <span class="p">(</span><span class="n">default</span><span class="p">)</span>
  
    <span class="n">A</span> <span class="n">full</span> <span class="n">static</span> <span class="n">HTML</span> <span class="n">render</span> <span class="n">of</span> <span class="n">the</span> <span class="n">notebook</span><span class="o">.</span>
    <span class="n">This</span> <span class="n">looks</span> <span class="n">very</span> <span class="n">similar</span> <span class="n">to</span> <span class="n">the</span> <span class="n">interactive</span> <span class="n">view</span><span class="o">.</span>

  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">basic</span><span class="sb">``</span>
  
    <span class="n">Simplified</span> <span class="n">HTML</span><span class="p">,</span> <span class="n">useful</span> <span class="k">for</span> <span class="n">embedding</span> <span class="ow">in</span> <span class="n">webpages</span><span class="p">,</span> <span class="n">blogs</span><span class="p">,</span> <span class="n">etc</span><span class="o">.</span>
    <span class="n">This</span> <span class="n">excludes</span> <span class="n">HTML</span> <span class="n">headers</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">latex</span><span class="sb">``</span>

  <span class="n">Latex</span> <span class="n">export</span><span class="o">.</span>  <span class="n">This</span> <span class="n">generates</span> <span class="sb">``</span><span class="n">NOTEBOOK_NAME</span><span class="o">.</span><span class="n">tex</span><span class="sb">``</span> <span class="nb">file</span><span class="p">,</span>
  <span class="n">ready</span> <span class="k">for</span> <span class="n">export</span><span class="o">.</span>  <span class="n">You</span> <span class="n">can</span> <span class="n">automatically</span> <span class="n">run</span> <span class="n">latex</span> <span class="n">on</span> <span class="n">it</span> <span class="n">to</span> <span class="n">generate</span> <span class="n">a</span> <span class="n">PDF</span>
  <span class="n">by</span> <span class="n">adding</span> <span class="sb">``</span><span class="o">--</span><span class="n">post</span> <span class="n">PDF</span><span class="sb">``</span><span class="o">.</span>
  
  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">article</span><span class="sb">``</span> <span class="p">(</span><span class="n">default</span><span class="p">)</span>
  
    <span class="n">Latex</span> <span class="n">article</span><span class="p">,</span> <span class="n">derived</span> <span class="kn">from</span> <span class="nn">Sphinx</span><span class="s">&#39;s howto template.</span>

  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">book</span><span class="sb">``</span>
  
    <span class="n">Latex</span> <span class="n">book</span><span class="p">,</span> <span class="n">derived</span> <span class="kn">from</span> <span class="nn">Sphinx</span><span class="s">&#39;s manual template.</span>

  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">basic</span><span class="sb">``</span>
  
    <span class="n">Very</span> <span class="n">basic</span> <span class="n">latex</span> <span class="n">output</span> <span class="o">-</span> <span class="n">mainly</span> <span class="n">meant</span> <span class="k">as</span> <span class="n">a</span> <span class="n">starting</span> <span class="n">point</span> <span class="k">for</span> <span class="n">custom</span> <span class="n">templates</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">slides</span><span class="sb">``</span>

  <span class="n">This</span> <span class="n">generates</span> <span class="n">a</span> <span class="n">Reveal</span><span class="o">.</span><span class="n">js</span> <span class="n">HTML</span> <span class="n">slideshow</span><span class="o">.</span>
  <span class="n">It</span> <span class="n">must</span> <span class="n">be</span> <span class="n">served</span> <span class="n">by</span> <span class="n">an</span> <span class="n">HTTP</span> <span class="n">server</span><span class="o">.</span> <span class="n">The</span> <span class="n">easiest</span> <span class="n">way</span> <span class="n">to</span> <span class="n">do</span> <span class="n">this</span> <span class="ow">is</span> <span class="n">adding</span>
  <span class="sb">``</span><span class="o">--</span><span class="n">post</span> <span class="n">serve</span><span class="sb">``</span> <span class="n">on</span> <span class="n">the</span> <span class="n">command</span><span class="o">-</span><span class="n">line</span><span class="o">.</span> <span class="n">The</span> <span class="sb">``</span><span class="o">--</span><span class="n">post</span> <span class="n">serve</span><span class="sb">``</span> <span class="n">post</span><span class="o">-</span><span class="n">processor</span> 
  <span class="n">proxies</span> <span class="n">Reveal</span><span class="o">.</span><span class="n">js</span> <span class="n">requests</span> <span class="n">to</span> <span class="n">a</span> <span class="n">CDN</span> <span class="k">if</span> <span class="n">no</span> <span class="n">local</span> <span class="n">Reveal</span><span class="o">.</span><span class="n">js</span> <span class="n">library</span> <span class="ow">is</span> <span class="n">present</span><span class="o">.</span> 
  <span class="n">For</span> <span class="n">low</span> <span class="n">connectivity</span> <span class="n">environments</span><span class="p">,</span> <span class="n">just</span> <span class="n">place</span> <span class="n">the</span> <span class="n">Reveal</span><span class="o">.</span><span class="n">js</span> <span class="n">library</span> <span class="ow">in</span> <span class="n">the</span> 
  <span class="n">same</span> <span class="n">directory</span> <span class="n">where</span> <span class="n">your_talk</span><span class="o">.</span><span class="n">slides</span><span class="o">.</span><span class="n">html</span> <span class="ow">is</span> <span class="n">located</span> <span class="ow">or</span> <span class="n">point</span> <span class="n">to</span> <span class="n">another</span> 
  <span class="n">directory</span> <span class="n">using</span> <span class="n">the</span> <span class="sb">``</span><span class="o">--</span><span class="n">reveal</span><span class="o">-</span><span class="n">prefix</span><span class="sb">``</span> <span class="n">alias</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">markdown</span><span class="sb">``</span>

  <span class="n">Simple</span> <span class="n">markdown</span> <span class="n">output</span><span class="o">.</span>  <span class="n">Markdown</span> <span class="n">cells</span> <span class="n">are</span> <span class="n">unaffected</span><span class="p">,</span>
  <span class="ow">and</span> <span class="n">code</span> <span class="n">cells</span> <span class="n">are</span> <span class="n">placed</span> <span class="ow">in</span> <span class="n">triple</span><span class="o">-</span><span class="n">backtick</span> <span class="p">(</span><span class="sb">``````</span><span class="err">`</span><span class="p">)</span> <span class="n">blocks</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">rst</span><span class="sb">``</span>

  <span class="n">Basic</span> <span class="n">reStructuredText</span> <span class="n">output</span><span class="o">.</span> <span class="n">Useful</span> <span class="k">as</span> <span class="n">a</span> <span class="n">starting</span> <span class="n">point</span> <span class="k">for</span> <span class="n">embedding</span> <span class="n">notebooks</span>
  <span class="ow">in</span> <span class="n">Sphinx</span> <span class="n">docs</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">python</span><span class="sb">``</span>

  <span class="n">Convert</span> <span class="n">a</span> <span class="n">notebook</span> <span class="n">to</span> <span class="n">an</span> <span class="n">executable</span> <span class="n">Python</span> <span class="n">script</span><span class="o">.</span>
  <span class="n">This</span> <span class="ow">is</span> <span class="n">the</span> <span class="n">simplest</span> <span class="n">way</span> <span class="n">to</span> <span class="n">get</span> <span class="n">a</span> <span class="n">Python</span> <span class="n">script</span> <span class="n">out</span> <span class="n">of</span> <span class="n">a</span> <span class="n">notebook</span><span class="o">.</span>
  <span class="n">If</span> <span class="n">there</span> <span class="n">were</span> <span class="nb">any</span> <span class="n">magics</span> <span class="ow">in</span> <span class="n">the</span> <span class="n">notebook</span><span class="p">,</span> <span class="n">this</span> <span class="n">may</span> <span class="n">only</span> <span class="n">be</span> <span class="n">executable</span> <span class="kn">from</span>
  <span class="nn">an</span> <span class="nn">IPython</span> <span class="nn">session.</span>
  
<span class="o">..</span> <span class="n">note</span><span class="p">::</span>

  <span class="n">nbconvert</span> <span class="n">uses</span> <span class="n">pandoc_</span> <span class="n">to</span> <span class="n">convert</span> <span class="n">between</span> <span class="n">various</span> <span class="n">markup</span> <span class="n">languages</span><span class="p">,</span>
  <span class="n">so</span> <span class="n">pandoc</span> <span class="ow">is</span> <span class="n">a</span> <span class="n">dependency</span> <span class="n">of</span> <span class="n">most</span> <span class="n">nbconvert</span> <span class="n">transforms</span><span class="p">,</span>
  <span class="n">excluding</span> <span class="n">Markdown</span> <span class="ow">and</span> <span class="n">Python</span><span class="o">.</span>

<span class="o">..</span> <span class="n">_pandoc</span><span class="p">:</span> <span class="n">http</span><span class="p">:</span><span class="o">//</span><span class="n">johnmacfarlane</span><span class="o">.</span><span class="n">net</span><span class="o">/</span><span class="n">pandoc</span><span class="o">/</span>

<span class="n">The</span> <span class="n">output</span> <span class="nb">file</span> <span class="n">created</span> <span class="n">by</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">will</span> <span class="n">have</span> <span class="n">the</span> <span class="n">same</span> <span class="n">base</span> <span class="n">name</span> <span class="k">as</span>
<span class="n">the</span> <span class="n">notebook</span> <span class="ow">and</span> <span class="n">will</span> <span class="n">be</span> <span class="n">placed</span> <span class="ow">in</span> <span class="n">the</span> <span class="n">current</span> <span class="n">working</span> <span class="n">directory</span><span class="o">.</span> <span class="n">Any</span>
<span class="n">supporting</span> <span class="n">files</span> <span class="p">(</span><span class="n">graphics</span><span class="p">,</span> <span class="n">etc</span><span class="p">)</span> <span class="n">will</span> <span class="n">be</span> <span class="n">placed</span> <span class="ow">in</span> <span class="n">a</span> <span class="n">new</span> <span class="n">directory</span> <span class="k">with</span> <span class="n">the</span>
<span class="n">same</span> <span class="n">base</span> <span class="n">name</span> <span class="k">as</span> <span class="n">the</span> <span class="n">notebook</span><span class="p">,</span> <span class="n">suffixed</span> <span class="k">with</span> <span class="sb">``</span><span class="n">_files</span><span class="sb">``</span><span class="p">::</span>

  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span>
  <span class="err">$</span> <span class="n">ls</span>
  <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span>   <span class="n">notebook</span><span class="o">.</span><span class="n">html</span>    <span class="n">notebook_files</span><span class="o">/</span>

<span class="n">For</span> <span class="n">simple</span> <span class="n">single</span><span class="o">-</span><span class="nb">file</span> <span class="n">output</span><span class="p">,</span> <span class="n">such</span> <span class="k">as</span> <span class="n">html</span><span class="p">,</span> <span class="n">markdown</span><span class="p">,</span> <span class="n">etc</span><span class="o">.</span><span class="p">,</span>
<span class="n">the</span> <span class="n">output</span> <span class="n">may</span> <span class="n">be</span> <span class="n">sent</span> <span class="n">to</span> <span class="n">standard</span> <span class="n">output</span> <span class="k">with</span><span class="p">::</span>
    
  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="o">--</span><span class="n">to</span> <span class="n">markdown</span> <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span> <span class="o">--</span><span class="n">stdout</span>
    
<span class="n">Multiple</span> <span class="n">notebooks</span> <span class="n">can</span> <span class="n">be</span> <span class="n">specified</span> <span class="kn">from</span> <span class="nn">the</span> <span class="nn">command</span> <span class="nn">line</span><span class="p">::</span>
    
  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="n">notebook</span><span class="o">*.</span><span class="n">ipynb</span>
  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="n">notebook1</span><span class="o">.</span><span class="n">ipynb</span> <span class="n">notebook2</span><span class="o">.</span><span class="n">ipynb</span>
    
<span class="ow">or</span> <span class="n">via</span> <span class="n">a</span> <span class="nb">list</span> <span class="ow">in</span> <span class="n">a</span> <span class="n">configuration</span> <span class="nb">file</span><span class="p">,</span> <span class="n">say</span> <span class="sb">``</span><span class="n">mycfg</span><span class="o">.</span><span class="n">py</span><span class="sb">``</span><span class="p">,</span> <span class="n">containing</span> <span class="n">the</span> <span class="n">text</span><span class="p">::</span>

  <span class="n">c</span> <span class="o">=</span> <span class="n">get_config</span><span class="p">()</span>
  <span class="n">c</span><span class="o">.</span><span class="n">NbConvertApp</span><span class="o">.</span><span class="n">notebooks</span> <span class="o">=</span> <span class="p">[</span><span class="s">&quot;notebook1.ipynb&quot;</span><span class="p">,</span> <span class="s">&quot;notebook2.ipynb&quot;</span><span class="p">]</span>

<span class="ow">and</span> <span class="n">using</span> <span class="n">the</span> <span class="n">command</span><span class="p">::</span>

  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="o">--</span><span class="n">config</span> <span class="n">mycfg</span><span class="o">.</span><span class="n">py</span>


<span class="o">..</span> <span class="n">_notebook_format</span><span class="p">:</span>

<span class="n">LaTeX</span> <span class="n">citations</span>
<span class="o">---------------</span>

<span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">now</span> <span class="n">has</span> <span class="n">support</span> <span class="k">for</span> <span class="n">LaTeX</span> <span class="n">citations</span><span class="o">.</span> <span class="n">With</span> <span class="n">this</span> <span class="n">capability</span> <span class="n">you</span>
<span class="n">can</span><span class="p">:</span>

<span class="o">*</span> <span class="n">Manage</span> <span class="n">citations</span> <span class="n">using</span> <span class="n">BibTeX</span><span class="o">.</span>
<span class="o">*</span> <span class="n">Cite</span> <span class="n">those</span> <span class="n">citations</span> <span class="ow">in</span> <span class="n">Markdown</span> <span class="n">cells</span> <span class="n">using</span> <span class="n">HTML</span> <span class="n">data</span> <span class="n">attributes</span><span class="o">.</span>
<span class="o">*</span> <span class="n">Have</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">generate</span> <span class="n">proper</span> <span class="n">LaTeX</span> <span class="n">citations</span> <span class="ow">and</span> <span class="n">run</span> <span class="n">BibTeX</span><span class="o">.</span>

<span class="n">For</span> <span class="n">an</span> <span class="n">example</span> <span class="n">of</span> <span class="n">how</span> <span class="n">this</span> <span class="n">works</span><span class="p">,</span> <span class="n">please</span> <span class="n">see</span> <span class="n">the</span> <span class="n">citations</span> <span class="n">example</span> <span class="ow">in</span>
<span class="n">the</span> <span class="n">nbconvert</span><span class="o">-</span><span class="n">examples_</span> <span class="n">repository</span><span class="o">.</span>

<span class="o">..</span> <span class="n">_nbconvert</span><span class="o">-</span><span class="n">examples</span><span class="p">:</span> <span class="n">https</span><span class="p">:</span><span class="o">//</span><span class="n">github</span><span class="o">.</span><span class="n">com</span><span class="o">/</span><span class="n">ipython</span><span class="o">/</span><span class="n">nbconvert</span><span class="o">-</span><span class="n">examples</span>

<span class="n">Notebook</span> <span class="n">JSON</span> <span class="nb">file</span> <span class="n">format</span>
<span class="o">-------------------------</span>

<span class="n">Notebook</span> <span class="n">documents</span> <span class="n">are</span> <span class="n">JSON</span> <span class="n">files</span> <span class="k">with</span> <span class="n">an</span> <span class="sb">``</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="n">extension</span><span class="p">,</span> <span class="n">formatted</span>
<span class="k">as</span> <span class="n">legibly</span> <span class="k">as</span> <span class="n">possible</span> <span class="k">with</span> <span class="n">minimal</span> <span class="n">extra</span> <span class="n">indentation</span> <span class="ow">and</span> <span class="n">cell</span> <span class="n">content</span> <span class="n">broken</span>
<span class="n">across</span> <span class="n">lines</span> <span class="n">to</span> <span class="n">make</span> <span class="n">them</span> <span class="n">reasonably</span> <span class="n">friendly</span> <span class="n">to</span> <span class="n">use</span> <span class="ow">in</span> <span class="n">version</span><span class="o">-</span><span class="n">control</span>
<span class="n">workflows</span><span class="o">.</span>  <span class="n">You</span> <span class="n">should</span> <span class="n">be</span> <span class="n">very</span> <span class="n">careful</span> <span class="k">if</span> <span class="n">you</span> <span class="n">ever</span> <span class="n">manually</span> <span class="n">edit</span> <span class="n">this</span> <span class="n">JSON</span>
<span class="n">data</span><span class="p">,</span> <span class="k">as</span> <span class="n">it</span> <span class="ow">is</span> <span class="n">extremely</span> <span class="n">easy</span> <span class="n">to</span> <span class="n">corrupt</span> <span class="n">its</span> <span class="n">internal</span> <span class="n">structure</span> <span class="ow">and</span> <span class="n">make</span> <span class="n">the</span>
<span class="nb">file</span> <span class="n">impossible</span> <span class="n">to</span> <span class="n">load</span><span class="o">.</span>  <span class="n">In</span> <span class="n">general</span><span class="p">,</span> <span class="n">you</span> <span class="n">should</span> <span class="n">consider</span> <span class="n">the</span> <span class="n">notebook</span> <span class="k">as</span> <span class="n">a</span>
<span class="nb">file</span> <span class="n">meant</span> <span class="n">only</span> <span class="n">to</span> <span class="n">be</span> <span class="n">edited</span> <span class="n">by</span> <span class="n">the</span> <span class="n">IPython</span> <span class="n">Notebook</span> <span class="n">app</span> <span class="n">itself</span><span class="p">,</span> <span class="ow">not</span> <span class="k">for</span> 
<span class="n">hand</span><span class="o">-</span><span class="n">editing</span><span class="o">.</span>

<span class="o">..</span> <span class="n">note</span><span class="p">::</span>

     <span class="n">Binary</span> <span class="n">data</span> <span class="n">such</span> <span class="k">as</span> <span class="n">figures</span> <span class="n">are</span> <span class="n">also</span> <span class="n">saved</span> <span class="n">directly</span> <span class="ow">in</span> <span class="n">the</span> <span class="n">JSON</span> <span class="nb">file</span><span class="o">.</span>  
     <span class="n">This</span> <span class="n">provides</span> <span class="n">convenient</span> <span class="n">single</span><span class="o">-</span><span class="nb">file</span> <span class="n">portability</span><span class="p">,</span> <span class="n">but</span> <span class="n">means</span> <span class="n">that</span> <span class="n">the</span> 
     <span class="n">files</span> <span class="n">can</span> <span class="n">be</span> <span class="n">large</span><span class="p">;</span> <span class="n">a</span> <span class="sb">``</span><span class="n">diff</span><span class="sb">``</span> <span class="n">of</span> <span class="n">binary</span> <span class="n">data</span> <span class="ow">is</span> <span class="n">also</span> <span class="ow">not</span> <span class="n">very</span> 
     <span class="n">meaningful</span><span class="o">.</span>  <span class="n">Since</span> <span class="n">the</span> <span class="n">binary</span> <span class="n">blobs</span> <span class="n">are</span> <span class="n">encoded</span> <span class="ow">in</span> <span class="n">a</span> <span class="n">single</span> <span class="n">line</span><span class="p">,</span> <span class="n">they</span> 
     <span class="n">affect</span> <span class="n">only</span> <span class="n">one</span> <span class="n">line</span> <span class="n">of</span> <span class="n">the</span> <span class="sb">``</span><span class="n">diff</span><span class="sb">``</span> <span class="n">output</span><span class="p">,</span> <span class="n">but</span> <span class="n">they</span> <span class="n">are</span> <span class="n">typically</span> <span class="n">very</span> 
     <span class="nb">long</span> <span class="n">lines</span><span class="o">.</span>  <span class="n">You</span> <span class="n">can</span> <span class="n">use</span> <span class="n">the</span> <span class="sb">``</span><span class="n">Cell</span> <span class="o">|</span> <span class="n">All</span> <span class="n">Output</span> <span class="o">|</span> <span class="n">Clear</span><span class="sb">``</span> <span class="n">menu</span> <span class="n">option</span> <span class="n">to</span> 
     <span class="n">remove</span> <span class="nb">all</span> <span class="n">output</span> <span class="kn">from</span> <span class="nn">a</span> <span class="nn">notebook</span> <span class="nn">prior</span> <span class="nn">to</span> <span class="nn">committing</span> <span class="nn">it</span> <span class="nn">to</span> <span class="nn">version</span> 
     <span class="n">control</span><span class="p">,</span> <span class="k">if</span> <span class="n">this</span> <span class="ow">is</span> <span class="n">a</span> <span class="n">concern</span><span class="o">.</span>

<span class="n">The</span> <span class="n">notebook</span> <span class="n">server</span> <span class="n">can</span> <span class="n">also</span> <span class="n">generate</span> <span class="n">a</span> <span class="n">pure</span> <span class="n">Python</span> <span class="n">version</span> <span class="n">of</span> <span class="n">your</span> <span class="n">notebook</span><span class="p">,</span> 
<span class="n">using</span> <span class="n">the</span> <span class="sb">``</span><span class="n">File</span> <span class="o">|</span> <span class="n">Download</span> <span class="k">as</span><span class="sb">``</span> <span class="n">menu</span> <span class="n">option</span><span class="o">.</span> <span class="n">The</span> <span class="n">resulting</span> <span class="sb">``</span><span class="o">.</span><span class="n">py</span><span class="sb">``</span> <span class="nb">file</span> <span class="n">will</span> 
<span class="n">contain</span> <span class="nb">all</span> <span class="n">the</span> <span class="n">code</span> <span class="n">cells</span> <span class="kn">from</span> <span class="nn">your</span> <span class="nn">notebook</span> <span class="nn">verbatim</span><span class="p">,</span> <span class="ow">and</span> <span class="nb">all</span> <span class="n">Markdown</span> <span class="n">cells</span> 
<span class="n">prepended</span> <span class="k">with</span> <span class="n">a</span> <span class="n">comment</span> <span class="n">marker</span><span class="o">.</span>  <span class="n">The</span> <span class="n">separation</span> <span class="n">between</span> <span class="n">code</span> <span class="ow">and</span> <span class="n">Markdown</span>
<span class="n">cells</span> <span class="ow">is</span> <span class="n">indicated</span> <span class="k">with</span> <span class="n">special</span> <span class="n">comments</span> <span class="ow">and</span> <span class="n">there</span> <span class="ow">is</span> <span class="n">a</span> <span class="n">header</span> <span class="n">indicating</span> <span class="n">the</span>
<span class="n">format</span> <span class="n">version</span><span class="o">.</span>  <span class="n">All</span> <span class="n">output</span> <span class="ow">is</span> <span class="n">removed</span> <span class="n">when</span> <span class="n">exporting</span> <span class="n">to</span> <span class="n">Python</span><span class="o">.</span>

<span class="n">As</span> <span class="n">an</span> <span class="n">example</span><span class="p">,</span> <span class="n">consider</span> <span class="n">a</span> <span class="n">simple</span> <span class="n">notebook</span> <span class="n">called</span> <span class="sb">``</span><span class="n">simple</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="n">which</span> 
<span class="n">contains</span> <span class="n">one</span> <span class="n">Markdown</span> <span class="n">cell</span><span class="p">,</span> <span class="k">with</span> <span class="n">the</span> <span class="n">content</span> <span class="sb">``</span><span class="n">The</span> <span class="n">simplest</span> <span class="n">notebook</span><span class="o">.</span><span class="sb">``</span><span class="p">,</span> <span class="n">one</span> 
<span class="n">code</span> <span class="nb">input</span> <span class="n">cell</span> <span class="k">with</span> <span class="n">the</span> <span class="n">content</span> <span class="sb">``</span><span class="k">print</span> <span class="s">&quot;Hello, IPython!&quot;</span><span class="sb">``</span><span class="p">,</span> <span class="ow">and</span> <span class="n">the</span> 
<span class="n">corresponding</span> <span class="n">output</span><span class="o">.</span>

<span class="n">The</span> <span class="n">contents</span> <span class="n">of</span> <span class="n">the</span> <span class="n">notebook</span> <span class="n">document</span> <span class="sb">``</span><span class="n">simple</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="ow">is</span> <span class="n">the</span> <span class="n">following</span> <span class="n">JSON</span> 
<span class="n">container</span><span class="p">::</span>

  <span class="p">{</span>
   <span class="s">&quot;metadata&quot;</span><span class="p">:</span> <span class="p">{</span>
    <span class="s">&quot;name&quot;</span><span class="p">:</span> <span class="s">&quot;simple&quot;</span>
   <span class="p">},</span>
   <span class="s">&quot;nbformat&quot;</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
   <span class="s">&quot;nbformat_minor&quot;</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
   <span class="s">&quot;worksheets&quot;</span><span class="p">:</span> <span class="p">[</span>
    <span class="p">{</span>
     <span class="s">&quot;cells&quot;</span><span class="p">:</span> <span class="p">[</span>
      <span class="p">{</span>
       <span class="s">&quot;cell_type&quot;</span><span class="p">:</span> <span class="s">&quot;markdown&quot;</span><span class="p">,</span>
       <span class="s">&quot;metadata&quot;</span><span class="p">:</span> <span class="p">{},</span>
       <span class="s">&quot;source&quot;</span><span class="p">:</span> <span class="s">&quot;The simplest notebook.&quot;</span>
      <span class="p">},</span>
      <span class="p">{</span>
       <span class="s">&quot;cell_type&quot;</span><span class="p">:</span> <span class="s">&quot;code&quot;</span><span class="p">,</span>
       <span class="s">&quot;collapsed&quot;</span><span class="p">:</span> <span class="n">false</span><span class="p">,</span>
       <span class="s">&quot;input&quot;</span><span class="p">:</span> <span class="s">&quot;print </span><span class="se">\&quot;</span><span class="s">Hello, IPython</span><span class="se">\&quot;</span><span class="s">&quot;</span><span class="p">,</span>
       <span class="s">&quot;language&quot;</span><span class="p">:</span> <span class="s">&quot;python&quot;</span><span class="p">,</span>
       <span class="s">&quot;metadata&quot;</span><span class="p">:</span> <span class="p">{},</span>
       <span class="s">&quot;outputs&quot;</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
         <span class="s">&quot;output_type&quot;</span><span class="p">:</span> <span class="s">&quot;stream&quot;</span><span class="p">,</span>
         <span class="s">&quot;stream&quot;</span><span class="p">:</span> <span class="s">&quot;stdout&quot;</span><span class="p">,</span>
         <span class="s">&quot;text&quot;</span><span class="p">:</span> <span class="s">&quot;Hello, IPython</span><span class="se">\n</span><span class="s">&quot;</span>
        <span class="p">}</span>
       <span class="p">],</span>
       <span class="s">&quot;prompt_number&quot;</span><span class="p">:</span> <span class="mi">1</span>
      <span class="p">}</span>
     <span class="p">],</span>
     <span class="s">&quot;metadata&quot;</span><span class="p">:</span> <span class="p">{}</span>
    <span class="p">}</span>
   <span class="p">]</span>
  <span class="p">}</span>


<span class="n">The</span> <span class="n">corresponding</span> <span class="n">Python</span> <span class="n">script</span> <span class="ow">is</span><span class="p">::</span>

  <span class="c"># -*- coding: utf-8 -*-</span>
  <span class="c"># &lt;nbformat&gt;3.0&lt;/nbformat&gt;</span>

  <span class="c"># &lt;markdowncell&gt;</span>

  <span class="c"># The simplest notebook.</span>

  <span class="c"># &lt;codecell&gt;</span>

  <span class="k">print</span> <span class="s">&quot;Hello, IPython&quot;</span>

<span class="n">Note</span> <span class="n">that</span> <span class="n">indeed</span> <span class="n">the</span> <span class="n">output</span> <span class="n">of</span> <span class="n">the</span> <span class="n">code</span> <span class="n">cell</span><span class="p">,</span> <span class="n">which</span> <span class="ow">is</span> <span class="n">present</span> <span class="ow">in</span> <span class="n">the</span> <span class="n">JSON</span> 
<span class="n">container</span><span class="p">,</span> <span class="n">has</span> <span class="n">been</span> <span class="n">removed</span> <span class="ow">in</span> <span class="n">the</span> <span class="sb">``</span><span class="o">.</span><span class="n">py</span><span class="sb">``</span> <span class="n">script</span><span class="o">.</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
Overwriting docs/source/interactive/nbconvert.rst

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Check the status and diff of your modifications:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[12]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Check status</span>
<span class="o">!</span>git status
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
# En la rama doc_post_serve
# Cambios no preparados para el commit:
#   (use «git add &lt;archivo&gt;...» para actualizar lo que se ejecutará)
#   (use «git checkout -- &lt;archivo&gt;...« para descartar cambios en le directorio de trabajo)
#
#	modificado:   docs/source/interactive/nbconvert.rst
#
no hay cambios agregados al commit (use «git add» o «git commit -a»)

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[13]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># See the diff</span>
<span class="o">!</span>git diff
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
diff --git a/docs/source/interactive/nbconvert.rst b/docs/source/interactive/nbconvert.rst
index 1789a62..610edf0 100644
--- a/docs/source/interactive/nbconvert.rst
+++ b/docs/source/interactive/nbconvert.rst
@@ -61,8 +61,12 @@ The currently supported export formats are:
 * &#96;&#96;--to slides&#96;&#96;
 
   This generates a Reveal.js HTML slideshow.
-  It must be served by an HTTP server.  The easiest way to do this is adding
-  &#96;&#96;--post serve&#96;&#96; on the command-line.
+  It must be served by an HTTP server. The easiest way to do this is adding
+  &#96;&#96;--post serve&#96;&#96; on the command-line. The &#96;&#96;--post serve&#96;&#96; post-processor 
+  proxies Reveal.js requests to a CDN if no local Reveal.js library is present. 
+  For low connectivity environments, just place the Reveal.js library in the 
+  same directory where your_talk.slides.html is located or point to another 
+  directory using the &#96;&#96;--reveal-prefix&#96;&#96; alias.
 
 * &#96;&#96;--to markdown&#96;&#96;
 
@@ -224,4 +228,3 @@ The corresponding Python script is::
 
 Note that indeed the output of the code cell, which is present in the JSON 
 container, has been removed in the &#96;&#96;.py&#96;&#96; script.
-

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Add the changes an commit them:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[14]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Add the modified files to the stage</span>
<span class="o">!</span>git add .
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[15]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># And do your commit</span>
<span class="o">!</span>git commit -am <span class="s2">&quot;Added --post-serve explanation into the nbconvert docs.&quot;</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
[doc_post_serve c87ac2f] Added --post-serve explanation into the nbconvert docs.
 1 file changed, 6 insertions(+), 3 deletions(-)

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Finally, push your local development branch to your <strong>Github</strong> fork:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[16]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Push updates from your local branch to your github branch</span>
<span class="o">!</span>git push <span class="nv">$my_fork_remote_name</span> <span class="nv">$feature_branch</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
Counting objects: 8732, done.
Delta compression using up to 4 threads.
Compressing objects:   0% (1/2767)   
Writing objects:   0% (1/7842)   
Total 7842 (delta 5520), reused 7275 (delta 4971)
To git@github.com:damianavila/ipython.git
 * [new branch]      doc_post_serve -&gt; doc_post_serve

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote>
<p><strong>NOTE</strong>: The merging of your <strong>Github</strong> development branch into the master is done via <em>pull-request</em> on the <strong>Github</strong> website. For reference, you can see the proposed <strong>PR</strong> here: https://github.com/ipython/ipython/pull/4751</p>
</blockquote>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>As you can see, this workflow is very <em>simple</em>... and with the aid of this <strong>ipytmpl</strong> is easier than <em>before</em> (before = making the same but in your traditional console).</p>
<p>You set up the environment, fill the variables to use <em>a posteriori</em>, and you have only to be concern about the changes you want to introduce (or remove) from the source code. All the other steps, all those git calls are predetermined and will be called whereas you advance in the workflow...</p>
<p>After making the <strong>PR</strong> at the <strong>Github</strong> website, you will receive some feedback and if you have to modified something, just start the short cycle again... Sometimes you will need more... I mean, because you are working in a <em>communitary project</em>, if somebody changes the same file as you, there will be some conflicts at the <em>merge</em> step, so it will be necessary to rebase the &quot;thing&quot;. But this is the central idea of the second <em>Extended</em> cycle which I will describe you in a second part of this post.</p>
<p>As always, I am waiting for your comments and critics!</p>
<p>OK, too long... I hope you did not get bored!</p>
<p>Have a nice <strong>New Year</strong>! And I see you in 2014 ;-)</p>
<p>Cheers.</p>
<p>Damián</p>
</div>