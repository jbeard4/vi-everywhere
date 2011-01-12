<?xml version="1.0"?>
<!--
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
-->
<xsl:stylesheet 
	xmlns="http://www.w3.org/2005/07/scxml" 
	xmlns:xsl ="http://www.w3.org/1999/XSL/Transform" 
	xmlns:vi="urn:vi"
	version="1.0">

	<!-- identity transform -->
	<xsl:template match="@*|node()">
		<xsl:copy>
			<xsl:apply-templates select="@*|node()"/>
		</xsl:copy>
	</xsl:template>

	<xsl:template match="vi:macro[@name='printable_keys_used_to_move_cursor']">

		<xsl:variable name="updateSelection" select="vi:param[@name='updateSelection']/@value"/>

		<transition event="bling">
			<script>
				controller.moveToEndOfLine(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>

		<transition event="backspace">
			<script>
				controller.moveLeft(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>

		<transition event="enter">
			<script>
				controller.moveDown(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>

		<transition event="colon" target="command_mode"/>

		<transition event="w">
			<script>
				controller.moveToStartOfNextWord(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
		<transition event="e">
			<script>
				controller.moveToEndOfNextWord(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
		<transition event="b">
			<script>
				controller.moveToStartOfPreviousWord(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
		<transition event="zero">
			<script>
				controller.moveToStartOfLine(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>

		<transition event="h">
			<script>
				controller.moveLeft(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>

		<transition event="l">
			<script>
				controller.moveRight(false,<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
		<transition event="k">
			<script>
				controller.moveUp(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
		<transition event="j">
			<script>
				controller.moveDown(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
	</xsl:template>

	<xsl:template match="vi:macro[@name='nonprintable_keys_used_to_move_cursor']">

		<xsl:variable name="updateSelection" select="vi:param[@name='updateSelection']/@value"/>

		<!-- non-printable movement keys -->
		<transition event="left">
			<script>
				controller.moveLeft(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
		<transition event="right">
			<script>
				controller.moveRight(false,<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
		<transition event="up">
			<script>
				controller.moveUp(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
		<transition event="down">
			<script>
				controller.moveDown(<xsl:value-of select="$updateSelection"/>)
			</script>
		</transition>
	</xsl:template>
</xsl:stylesheet>



