#!/bin/sh
xsltproc editor-behaviour-macros.xsl editor-behaviour.xml > /tmp/out.scxml
/home/jacob/workspace/gsoc2010/scxml-js/py-run.sh --backend state /tmp/out.scxml > out.js
