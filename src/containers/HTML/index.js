import React from 'react';
import { Helmet } from 'react-helmet';

const HTML = () => (
  <section>
    <Helmet>
      <title>Styleguide - HTML</title>
      <meta name="description" content="Styleguide - HTML" />
      <meta name="theme-color" content="#000000" />
    </Helmet>

    <section>
      <h2>General Formatting Rules</h2>

      <article>
        <h3>
          <a href="#capitalization" id="capitalization"><i className="fa fa-link"></i></a>
                Capitalization
        </h3>
        <p>Use only lowercase.</p>
        <p>All code has to be lowercase. This applies to HTML element names, attributes, attribute values (unless text/CDATA).</p>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">&lt;A HREF="/"&gt;Home&lt;/A&gt;</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;a href="/"&gt;Home&lt;/a&gt;</code></pre>
      </article>

      <article>
        <h3>
          <a href="#trailing-whitespace" id="trailing-whitespace"><i className="fa fa-link"></i></a>
                Trailing Whitespace
        </h3>
        <p>Remove trailing white spaces.</p>
        <p>Trailing white spaces are unnecessary and can complicate diffs.</p>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">&lt;p&gt;What?&lt;/p&gt;__</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;p&gt;What?&lt;/p&gt;</code></pre>

        <p>If using Sublime Text, this can be done automatically each time you save a file by adding the following to your User Settings JSON file (you should be able to find this within Sublime Text's menu):</p>

        <pre><code>"trim_trailing_white_space_on_save": true</code></pre>
      </article>

      <article>
        <h3>
          <a href="#indentation" id="indentation"><i className="fa fa-link"></i></a>
                Indentation
        </h3>
        <p>Indentation should be consistent throughout the entire file. Whether you choose to use tabs or spaces, or 2-spaces vs. 4-spaces - just be consistent!</p>
      </article>
    </section>

    <section>
      <h2>General Meta Rules</h2>

      <article>
        <h3>
          <a href="#encoding" id="encoding"><i className="fa fa-link"></i></a>
                Encoding
        </h3>
        <p>Use UTF-8 (no BOM).</p>
        <p>Make sure your editor uses UTF-8 as character encoding, without a byte order mark. Specify the encoding in HTML templates and documents with <code>&lt;meta charset="utf-8"&gt;</code>.</p>
      </article>

      <article>
        <h3>
          <a href="#comments" id="comments"><i className="fa fa-link"></i></a>
                Comments
        </h3>
        <p>Explain code as needed, where possible.</p>
        <p>Use comments to explain code: What does it cover, what purpose does it serve, and why is the respective solution used or preferred?</p>
      </article>

      <article>
        <h3>
          <a href="#action-items" id="action-items"><i className="fa fa-link"></i></a>
                Action Items
        </h3>
        <p>Mark todos and action items with <code>TODO:</code>.</p>
        <p>Highlight todos by using the keyword <code>TODO</code> only, not other formats like <code> @@ </code>. Append action items after a colon like this: <code>TODO: action item</code>.</p>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;!-- TODO: add other fruits --&gt;
&lt;ul&gt;
    &lt;li&gt;Apples&lt;/li&gt;
    &lt;li&gt;Oranges&lt;/li&gt;
&lt;/ul&gt;
        </code></pre>
      </article>
    </section>

    <section>
      <h2>HTML Style Rules</h2>

      <article>
        <h3>
          <a href="#doctype" id="doctype"><i className="fa fa-link"></i></a>
                Document Type
        </h3>
        <p>Use HTML5.</p>
        <p>HTML5 (HTML syntax) is preferred for all HTML documents: <code>&lt;!DOCTYPE html&gt;</code>.</p>
        <p>Do not close self-closing elements, ie. write <code>&lt;br&gt;</code>, not <code>&lt;br /&gt;</code>.</p>
      </article>

      <article>
        <h3>
          <a href="#validity" id="validity"><i className="fa fa-link"></i></a>
                HTML Validity
        </h3>
        <p>Use valid HTML.</p>
        <p>Using valid HTML is a measurable baseline quality that ensures proper HTML usage and contributes to learning about technical requirements and constraints.</p>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">&lt;title&gt;Page Title&lt;/title&gt;
&lt;article&gt;This is an article.</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;title&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;article&gt;This is an article.&lt;/article&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </article>

      <article>
        <h3>
          <a href="#semantics" id="semantics"><i className="fa fa-link"></i></a>
                Semantics
        </h3>
        <p>Use HTML according to its purpose.</p>
        <p>Use elements for what they have been created for. For example, use heading elements for headings, <code>p</code> elements for paragraphs, <code>a</code> elements for anchor, etc. Using HTML according to its purpose is important for accessibility, reuse and code efficiency reasons.</p>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">&lt;div onclick="goToRecommendations();"&gt;All recommendations&lt;/div&gt;</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;a href="recommendations/"&gt;All recommendations&lt;/a&gt;</code></pre>
      </article>

      <article>
        <h3>
          <a href="#media-fallback" id="media-fallback"><i className="fa fa-link"></i></a>
                Multimedia Fallback
        </h3>
        <p>Provide alternative contents for multimedia.</p>
        <p>For multimedia, such as images, video, or animated objects via canvas, make sure to offer alternative access. For images that means use of meaningful alternative text and for video and audio transcripts and captions, if available.</p>
        <p>Providing alternative contents is important for accessibility reasons. A blind user has few cues to tell what an image is about without the <code>alt</code> attributes, and other users may have no way of understanding what video or audio contents are about either.</p>
        <p>For images whose alt attributes would introduce redundancy and for images whose purpose is purely decorative which you cannot immediately use CSS for, use no alternative text, as in <code>alt=""</code>.</p>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">&lt;img src="udacity.png"&gt;</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;img src="udacity.png" alt="Udacity logo"&gt;</code></pre>
      </article>

      <article>
        <h3>
          <a href="#separation-of-concerns" id="separation-of-concerns"><i className="fa fa-link"></i></a>
                Separation of Concerns
        </h3>
        <p>Separate structure from presentation from behavior.</p>
        <p>Strictly keep structure (markup), presentation (styling), and behavior (scripting) apart, and try to keep the interaction between the three to an absolute minimum.</p>
        <p>That is, make sure documents and templates contain only HTML and HTML that is solely serving structural purposes. Move everything presentational into style sheets, and everything behavioral into scripts. In addition, keep the contact area as small as possible by linking as few style sheets and scripts as possible from documents and templates.</p>
        <p>Separating structure from presentation from behavior is important for maintenance reasons. It is almost always more expensive to change HTML documents and templates than it is to update style sheets and scripts.</p>
      </article>

      <article>
        <h3>
          <a href="#entity-refs" id="entity-refs"><i className="fa fa-link"></i></a>
                Entity References
        </h3>
        <p>Do not use entity references.</p>
        <p>There is no need to use entity references like &amp;mdash;, &amp;rdquo;, or &amp;#x263a;, assuming the same encoding (UTF-8) is used for files and editors as well as among teams.</p>
        <p>The only exceptions apply to characters with special meaning in HTML (like &lt; and &amp;) as well as control or “invisible” characters (like no-break spaces).</p>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">The currency symbol for the Euro is &amp;ldquo;&amp;eur;&amp;rdquo;.</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">The currency symbol for the Euro is “€”.</code></pre>
      </article>

      <article>
        <h3>
          <a href="#type-attrs" id="type-attrs"><i className="fa fa-link"></i></a>
                type Attributes
        </h3>
        <p>Omit type attributes for style sheets and scripts.</p>
        <p>Do not use type attributes for style sheets and scripts. Specifying type attributes in these contexts is not necessary as HTML implies <code>text/css</code> and <code>text/javascript</code> as defaults. This can be safely done even for older browsers</p>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">&lt;link rel="stylesheet" href="css/style.css" type="text/css"&gt;</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;link rel="stylesheet" href="css/style.css"&gt;</code></pre>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">&lt;script src="js/app.js" type="text/javascript"&gt;&lt;/script&gt;</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;script src="js/app.js"&gt;&lt;/script&gt;</code></pre>
      </article>
    </section>

    <section>
      <h2>HTML Formatting Rules</h2>

      <article>
        <h3>
          <a href="#general-formatting" id="general-formatting"><i className="fa fa-link"></i></a>
                General Formatting
        </h3>
        <p>Use a new line for every block, list or table element and indent every such child element.</p>
        <p>Independent of the styling of an element (as CSS allows elements to assume a different role per display property), put every block, list or table element on a new line.</p>
        <p>Also, indent them if they are child elements of a block, list or table element (if you run into issues around whitespace between list items it's acceptable to put all <code>li</code> elements in one line).</p>

        <h4 className="recommended">Recommended:</h4>
        <pre>
          <code className="recommended">
            code
          </code>
        </pre>
      </article>

      <article>
        <h3>
          <a href="#quotes" id="quotes"><i className="fa fa-link"></i></a>
                HTML Quotation Marks
        </h3>
        <p>When quoting attribute values, use double quotation marks.</p>

        <h4 className="not-recommended">Not Recommended:</h4>
        <pre><code className="not-recommended">&lt;a href='login/' className='btn btn-secondary'&gt;Login&lt;/a&gt;</code></pre>

        <h4 className="recommended">Recommended:</h4>
        <pre><code className="recommended">&lt;a href="login/" className="btn btn-secondary"&gt;Login&lt;/a&gt;</code></pre>
      </article>
    </section>

  </section>
);

export default HTML;
