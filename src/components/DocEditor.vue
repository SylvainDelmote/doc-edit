<template>
  <div>
    <button @click="testClick">Test</button>
    <button @click="testPrint">Print</button>
    <button @click="viewSource=!viewSource">View source</button>
    <button @click="testEdit">Editable</button>

    <div style="font-family: Avenir, sans-serif">
      <vue-document-editor
          v-model:content="content"
          :editable="true"
          :page_format_mm="page_format_mm"
          :page_margins="page_margins"
          :display="display"
      />
    </div>
    <div v-if="viewSource" class="editor">
      Source : <br/>
      {{ content }}
    </div>

  </div>
</template>

<script>
import VueDocumentEditor from 'vue-document-editor'
import TestForm from "@/components/template/TestForm.ce.vue";
import {defineCustomElement, markRaw} from "vue";

export default {
  name: "DocEditor",
  components: {TestForm, VueDocumentEditor},
  data() {
    return {
      content: [
        '<span><h1>Hello!</h1> fuizenze upnfez fnezf fieunfg qq<br/></span>' +
        '<span contenteditable="true"  class="maxsize">edrerezrezae zae aze aezrezrezrezrezitable editable</span><br/>' +
        '<span contenteditable="false" class="editable"> fze guhregirahgegi h </span>',
        //'<div><span><h1>Hello!</h1> fuizenze upnfez fnezf fieunfg qq<br></span><span contenteditable="true" oninput="checkSize"> editable</span><br><span contenteditable="false" class="editable"> fze guhregirahgegi h </span></div><div><br></div><div><test-ix0hv>aa</test-ix0hv>ezre z er \n',
       { template: markRaw(TestForm), props: {value: "test",max: 5}},

      ],
      page_format_mm: [210, 297],
      page_margins: "10mm 15mm",
      display: "grid", // ["grid", "vertical", "horizontal"]
      viewSource: false,

    }
  },
  methods: {
    new_uuid: () => Math.random().toString(36).slice(-5),
    testClick() {
      //console.log("test");
      //document.execCommand('justifyCenter')
      //this.content.push("test")
      //recup la selection
      //console.log(window.getSelection().toString())
      //insert du html, ici un tableau
      //document.execCommand('insertHTML',false,'<table><tr><td><br/></td><td><br/></td></tr></table>')
      document.input()
    },
    testPrint() {
      window.print()
      //envoyer a une API qui gerera un PDF
    },

    testEdit() {
      // console.log(window.getSelection().toString())
      //document.execCommand('formatBlock',false,'<b>')
      //document.execCommand('bold')
      //document.execCommand('contentReadOnly',false,true)

      //todo prb de focus
      //creation de l'element vue
      //let body = document.body;
      const elt = defineCustomElement(TestForm)
      customElements.define('test-' + this.new_uuid(), elt)
      //insertion dans la page
      //methode sans execcommande
      let mynode = new elt({value:"teezst", max:2})

      let sel = window.getSelection();
      let range = sel.getRangeAt(0);


      range.insertNode(mynode);
      sel.collapseToEnd();


      /*range.insertNode(mynode);
      let newrange = range.cloneRange();
      newrange.setStartAfter(mynode);
      newrange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newrange);*/


      //methode depreciée
      //document.execCommand('insertHTML',false,new elt().outerHTML);

    }
  }

}
</script>

<style scoped>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  color: black;
  background: rgb(248, 249, 250);
}

*[contenteditable="true"] {
  background: rgba(193, 231, 85, 0.4);
  transition: padding 0.05s linear;
}

span[contenteditable="true"]:focus {
  padding: 0 4px;
}

b {
  font-weight: bold;
}

.editable {
  background: rgba(3, 231, 85, 0.4);
}
.maxsize {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 80px;
}

</style>