This section contains all Settings functions.

# Table Of Contents
* [CP_Settings_Fill](#CP_Settings_Fill)
* [CP_Settings_NoFill](#CP_Settings_NoFill)
* [CP_Settings_Stroke](#CP_Settings_Stroke)
* [CP_Settings_NoStroke](#CP_Settings_NoStroke)
* [CP_Settings_StrokeWeight](#CP_Settings_StrokeWeight)
* [CP_Settings_Tint](#CP_Settings_Tint) NEW
* [CP_Settings_NoTint](#CP_Settings_NoTint) NEW
* [CP_Settings_AntiAlias](#CP_Settings_AntiAlias) NEW
* [CP_Settings_LineCapMode](#CP_Settings_LineCapMode) NEW
* [CP_Settings_LineJointMode](#CP_Settings_LineJointMode) NEW
* [CP_Settings_RectMode](#CP_Settings_RectMode)
* [CP_Settings_EllipseMode](#CP_Settings_EllipseMode)
* [CP_Settings_ImageMode](#CP_Settings_ImageMode)
* [CP_Settings_BlendMode](#CP_Settings_BlendMode)
* [CP_Settings_ImageFilterMode](#CP_Settings_ImageFilterMode)
* [CP_Settings_ImageWrapMode](#CP_Settings_ImageWrapMode)
* [CP_Settings_TextSize](#CP_Settings_TextSize)
* [CP_Settings_TextAlignment](#CP_Settings_TextAlignment)
* [CP_Settings_Scale](#CP_Settings_Scale)
* [CP_Settings_Rotate](#CP_Settings_Rotate)
* [CP_Settings_Translate](#CP_Settings_Translate)
* [CP_Settings_ApplyMatrix](#CP_Settings_ApplyMatrix)
* [CP_Settings_ResetMatrix](#CP_Settings_ResetMatrix)
* [CP_Settings_Save](#CP_Settings_Save)
* [CP_Settings_Restore](#CP_Settings_Restore)


# CP_Settings_Fill
This function sets the color of all subsequently drawn shapes or text.

## Function
```C
void CP_Settings_Fill(CP_Color c);
```

### Parameters
* c ([CP_Color](Types/#CP_Color)) - The color to use for shapes and text.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // Create the color blue
    CP_Color myColor = CP_Color_Create(0, 0, 255, 255);

    // Set the shape color to blue
    CP_Settings_Fill(myColor);

    // Draw a rectangle at the origin
    CP_Graphics_DrawRect(0, 0, 10.0f, 10.0f);
}
```

## Related
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)

# CP_Settings_NoFill
This function will draw all subsequently drawn shapes without a fill color.

## Function
```C
void CP_Settings_NoFill(void);
```

### Parameters
This function has no parameters.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // Do not fill the shape
    CP_Settings_NoFill();

    // Draw a rectangle at the cursor position
    CP_Graphics_DrawRect(mouseX, mouseY, 10.0f, 10.0f);
}
```

## Related
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)

# CP_Settings_Stroke
This function sets the color of the stroke for subsequently drawn shapes.

## Function
```C
void CP_Settings_Stroke(CP_Color c);
```

### Parameters
* c ([CP_Color](Types/#CP_Color)) - The color to set the stroke to.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // Create the color red
    CP_Color myColor = CP_Color_Create(255, 0, 0, 255);

    // Set the stroke color to red
    CP_Settings_Stroke(myColor);

    // Draw a circle at the cursor position
    CP_Graphics_DrawCircle(CP_Input_GetMouseX(), CP_Input_GetMouseY(), 10.0f);
}
```

## Related
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Graphics_DrawCircle](Graphics/#CP_Graphics_DrawCircle)
* [CP_Input_GetMouseX](Input/#CP_Input_GetMouseX)
* [CP_Input_GetMouseY](Input/#CP_Input_GetMouseY)

# CP_Settings_NoStroke
This function will draw all subsequently drawn shapes without a stroke.

## Function
```C
void CP_Settings_NoStroke(void);
```

### Parameters
This function has no parameters.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // Do not draw a stroke around the next shape
    CP_Settings_NoStroke();

    // Draw a circle at the cursor position
    CP_Graphics_DrawCircle(CP_Input_GetMouseX(), CP_Input_GetMouseY(), 10.0f);
}
```

## Related
* [CP_Graphics_DrawCircle](Graphics/#CP_Graphics_DrawCircle)
* [CP_Input_GetMouseX](Input/#CP_Input_GetMouseX)
* [CP_Input_GetMouseY](Input/#CP_Input_GetMouseY)

# CP_Settings_StrokeWeight
This function modifies the thickness of all subsequently drawn shapes' stroke.

## Function
```C
void CP_Settings_StrokeWeight(float weight);
```

### Parameters
* width (float) - The thickness to set the stroke to.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // Sets the stroke of the next drawn shape to 1
    CP_Settings_StrokeWeight(1.0f);

    // Draw a circle at the origin
    CP_Graphics_DrawCircle(0, 0, 10.0f);
}
```

## Related
* [CP_Graphics_DrawCircle](Graphics/#CP_Graphics_DrawCircle)

# CP_Settings_Tint
Sets a color which will be applied to everything that is drawn on the screen.

## Function
```C
void CP_Settings_Tint(CP_Color c);
```

### Parameters
* c ([CP_Color](Types/#CP_Color)) - The color that will be overlaid on the screen.

### Return
This function does not return anything.

## Example
```C
void init()
{
    // Set the tint to partially transparent green
    CP_Settings_Tint(CP_Color_Create(0, 255, 0, 150));

    // Set the fill color to white
    CP_Settings_Fill(CP_Color_Create(255, 255, 255, 255));
}

void update()
{
    // Draw a white circle. It will look green because of the tint color.
    CP_Graphics_DrawCircle(200, 200, 100);
}
```

## Related
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Graphics_DrawCircle](Graphics/#CP_Graphics_DrawCircle)

# CP_Settings_NoTint
Removes any tint color that may have been set previously.

## Function
```C
void CP_Settings_NoTint(void);
```

### Parameters
This function has no parameters.

### Return
This function does not return anything.

## Example
```C
void init()
{
    // Set the tint to partially transparent green
    CP_Settings_Tint(CP_Color_Create(0, 255, 0, 150));

    // Set the fill color to white
    CP_Settings_Fill(CP_Color_Create(255, 255, 255, 255));
}

void update()
{
    // Remove the tint color when the mouse is clicked
    if (CP_Input_MouseClicked())
        CP_Settings_NoTint();

    CP_Graphics_DrawCircle(200, 200, 100);
}
```

## Related
* [CP_Settings_Tint](Settings/#CP_Settings_Tint)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Graphics_DrawCircle](Graphics/#CP_Graphics_DrawCircle)

# CP_Settings_AntiAlias
This function allows you to turn anti-aliasing on or off. When on, everything drawn on screen will have the edges slightly smoothed. The default behavior if this function is not called is to have anti-aliasing turned on.

## Function
```C
void CP_Settings_AntiAlias(CP_BOOL antiAlias);
```

### Parameters
* antiAlias ([CP_BOOL](Types/#CP_BOOL)) - The TRUE or FALSE variable that sets whether anti-aliasing is on or not.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // Turn anti-aliasing on when the mouse is single-clicked
    if (CP_Input_MouseClicked())
    {
        CP_Settings_AntiAlias(TRUE);
    }
    // Turn anti-aliasing off when the mouse is double-clicked
    if (CP_Input_MouseDoubleClicked())
    {
        CP_Settings_AntiAlias(FALSE);
    }
}
```

## Related
* [CP_Input_MouseClicked](Input/#CP_Input_MouseClicked)
* [CP_Input_MouseDoubleClicked](Input/#CP_Input_MouseDoubleClicked)

# CP_Settings_LineCapMode
Sets the way the end of lines will be drawn. Check [CP_LINE_CAP_MODE](Types/#CP_LINE_CAP_MODE) for options on which modes you can set. Defaults to CP_LINE_CAP_BUTT.

## Function
```C
void CP_Settings_LineCapMode(CP_LINE_CAP_MODE capMode);
```

### Parameters
* capMode ([CP_LINE_CAP_MODE](Types/#CP_LINE_CAP_MODE)) - The mode to use for drawing the end of lines.

### Return
This function does not return anything.

## Example
```C
void update()
{
    if (CP_Input_KeyTriggered(KEY_1))
    {
        CP_Settings_LineCapMode(CP_LINE_CAP_BUTT);
    }
    else if (CP_Input_KeyTriggered(KEY_2))
    {
        CP_Settings_LineCapMode(CP_LINE_CAP_ROUND);
    }
    else if (CP_Input_KeyTriggered(KEY_3))
    {
        CP_Settings_LineCapMode(CP_LINE_CAP_SQUARE);
    }
}
```

## Related
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)

# CP_Settings_LineJointMode
Sets the sharpness of corners when drawing shapes. Check [CP_LINE_JOINT_MODE](Types/#CP_LINE_JOINT_MODE) for options on which modes you can set. Defaults to CP_LINE_JOINT_BEVEL.

## Function
```C
void CP_Settings_LineJointMode(CP_LINE_JOINT_MODE jointMode);
```

### Parameters
* jointMode ([CP_LINE_JOINT_MODE](Types/#CP_LINE_JOINT_MODE)) - The mode to use for drawing corners.

## Example
```C
void update()
{
    if (CP_Input_KeyTriggered(KEY_1))
    {
        CP_Settings_LineJointMode(CP_LINE_JOINT_ROUND);
    }
    else if (CP_Input_KeyTriggered(KEY_2))
    {
        CP_Settings_LineJointMode(CP_LINE_JOINT_BEVEL);
    }
    else if (CP_Input_KeyTriggered(KEY_3))
    {
        CP_Settings_LineJointMode(CP_LINE_JOINT_MITER);
    }
}
```

## Related
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)

# CP_Settings_RectMode
Lets you set the way rectangles will be drawn. Check [CP_POSITION_MODE](Types/#CP_POSITION_MODE) for options on which modes you can set. Defaults to CP_POSITION_CORNER.

## Function
```C
void CP_Settings_RectMode(CP_POSITION_MODE mode);
```

### Parameters
mode ([CP_POSITION_MODE](Types/#CP_POSITION_MODE)) - The mode to use for where rectangles are drawn.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // set the background color to gray
    CP_Graphics_ClearBackground(CP_Color_Create(200, 200, 200, 255));

    // set the rectangle drawing mode to CENTER
    CP_Settings_RectMode(CP_POSITION_CENTER);

    // draw a rectangle at the center of the screen, half the size of the screen
    CP_Graphics_DrawRect(CP_System_GetWindowWidth() / 2.0f, CP_System_GetWindowHeight() / 2.0f,
                         CP_System_GetWindowWidth() / 2.0f, CP_System_GetWindowHeight() / 2.0f);
}
```

## Related
* [CP_POSITION_MODE](Types/#CP_POSITION_MODE)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_System_GetWindowWidth](System/#CP_System_GetWindowWidth)
* [CP_System_GetWindowHeight](System/#CP_System_GetWindowHeight)

# CP_Settings_EllipseMode
Lets you set the way ellipses and circles will be drawn. Check [CP_POSITION_MODE](Types/#CP_POSITION_MODE) for options on which modes you can set. Defaults to CP_POSITION_CENTER.

## Function
```C
void CP_Settings_EllipseMode(CP_POSITION_MODE mode);
```

### Parameters
mode ([CP_POSITION_MODE](Types/#CP_POSITION_MODE)) - The mode to use for where elipses are drawn.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // set the background color to gray
    CP_Graphics_ClearBackground(CP_Color_Create(200, 200, 200, 255));

    // set the rectangle drawing mode to CENTER
    CP_Settings_EllipseMode(CP_POSITION_CENTER);

    // draw a rectangle at the center of the screen, half the size of the screen
    CP_Graphics_DrawRect(CP_System_GetWindowWidth() / 2.0f, CP_System_GetWindowHeight() / 2.0f,
                         CP_System_GetWindowWidth() / 2.0f, CP_System_GetWindowHeight() / 2.0f);
}
```

## Related
* [CP_POSITION_MODE](Types/#CP_POSITION_MODE)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_System_GetWindowWidth](System/#CP_System_GetWindowWidth)
* [CP_System_GetWindowHeight](System/#CP_System_GetWindowHeight)

# CP_Settings_ImageMode
Sets the mode to draw an image (similar to a rectangle) with a [CP_POSITION_MODE](Types/#CP_POSITION_MODE). Defaults to CP_POSITION_CENTER.

## Function
```C
void CP_Settings_ImageMode(CP_POSITION_MODE mode);
```

### Parameters
mode ([CP_POSITION_MODE](Types/#CP_POSITION_MODE)) - The mode to use when drawing images.

### Return
This function does not return anything.

## Example
```C
CP_Image justin_face;

void init()
{
    justin_face = CP_Image_Load("./Assets/justin1.png");
    CP_Settings_ImageMode(CP_POSITION_CORNER);
}

float rotation = 0;
void update()
{
    CP_Graphics_ClearBackground(CP_Color_Create(255, 255, 255, 255));
    CP_Image_DrawAdvanced(justin_face, CP_Input_GetMouseX(), CP_Input_GetMouseY(), 100, 150, 255, rotation);
    rotation++;
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Image_Load](Image/#CP_Image_Load)
* [CP_Image_DrawAdvanced](Image/#CP_Image_DrawAdvanced)
* [CP_Input_GetMouseX](Input/#CP_Input_GetMouseX)
* [CP_Input_GetMouseY](Input/#CP_Input_GetMouseY)

# CP_Settings_BlendMode
Set the blend mode for subsequent draw calls. See [CP_BLEND_MODE](Types/#CP_BLEND_MODE) for the different blend modes you can set and use.

## Function
```C
void CP_Settings_BlendMode(CP_BLEND_MODE blendMode);
```

### Parameters
* blendMode ([CP_BLEND_MODE](Types/#CP_BLEND_MODE)) - The new blend mode to set the program to.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // Toggle between two blend modes
    if (CP_Input_KeyTriggered(KEY_1))
        CP_Settings_BlendMode(CP_BLEND_MULTIPLY);
    else if (CP_Input_KeyTriggered(KEY_2))
        CP_Settings_BlendMode(CP_BLEND_ALPHA);

    // Set the background color
    CP_Graphics_ClearBackground(CP_Color_Create(245, 240, 176, 255));

    // Draw a green circle
    CP_Settings_Fill(CP_Color_Create(102, 186, 125, 255));
    CP_Graphics_DrawCircle(100, 200, 150);

    // Draw an overlapping blue circle
    CP_Settings_Fill(CP_Color_Create(100, 150, 237, 255));
    CP_Graphics_DrawCircle(200, 200, 150);
}
```

## Related
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Graphics_DrawCircle](Graphics/#CP_Graphics_DrawCircle)

# CP_Settings_ImageFilterMode
Sets the type of math to be used when doing anti-aliasing. See [CP_IMAGE_FILTER_MODE](Types/#CP_IMAGE_FILTER_MODE) for the different modes you can set and use.

## Function
```C
void CP_Settings_ImageFilterMode(CP_IMAGE_FILTER_MODE filterMode);
```

### Paramters
* filterMode ([CP_IMAGE_FILTER_MODE](Types/#CP_IMAGE_FILTER_MODE)) - The mode to use when anti-aliasing.

### Return
This function does not return anything.

## Example
```C
void update()
{
    // Toggle between modes
    if (CP_Input_KeyTriggered(KEY_1))
        CP_Settings_ImageFilterMode(CP_IMAGE_FILTER_NEAREST);
    else if (CP_Input_KeyTriggered(KEY_2))
        CP_Settings_ImageFilterMode(CP_IMAGE_FILTER_LINEAR);

    // Set the background color
    CP_Graphics_ClearBackground(CP_Color_Create(245, 240, 176, 255));

    // Draw a green circle
    CP_Settings_Fill(CP_Color_Create(102, 186, 125, 255));
    CP_Graphics_DrawCircle(100, 100, 150);
}
```

## Related
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Graphics_DrawCircle](Graphics/#CP_Graphics_DrawCircle)

# CP_Settings_ImageWrapMode
Sets the behavior for what happens when a texture is sampled outside its bounds. See [CP_IMAGE_WRAP_MODE](Types/#CP_IMAGE_WRAP_MODE) for the different modes you can set and use. Defaults to CP_IMAGE_WRAP_CLAMP.

## Function
```C
void CP_Settings_ImageWrapMode(CP_IMAGE_WRAP_MODE wrapMode);
```

### Paramters
* wrapMode ([CP_IMAGE_WRAP_MODE](Types/#CP_IMAGE_WRAP_MODE)) - The mode to use for texture wrapping.

### Return
This function does not return anything.

## Example
```C
CP_Image image;
int imageWidth;
int imageHeight;
float halfWidth;
float halfHeight;

void init()
{
    image = CP_Image_Load("./Assets/Sunflower.png");
    imageWidth = CP_Image_GetWidth(image);
    imageHeight = CP_Image_GetHeight(image);
    halfHeight = imageHeight * 0.5f;
    halfWidth = imageWidth * 0.5f;
}

void update()
{
    CP_Graphics_ClearBackground(CP_Color_Create(100, 200, 250, 150));

    // Draw the image at (150, 150), 300 wide by 80 tall, and sample the texture
    // starting at the center of the image (half the width and half the height from the top left corner)
    // and ending half the width past the right edge and half the height past the bottom edge.
    // By default this will display the bottom right quarter of the image.
    CP_Image_DrawSubImage(image, 150, 150, 300, 80, halfWidth, halfHeight, imageWidth + halfWidth, imageHeight + halfHeight, 255);

    // Toggle between different modes with the number keys
    if (CP_Input_KeyTriggered(KEY_1))
        CP_Settings_ImageWrapMode(CP_IMAGE_WRAP_CLAMP);
    else if (CP_Input_KeyTriggered(KEY_2))
        CP_Settings_ImageWrapMode(CP_IMAGE_WRAP_CLAMP_EDGE);
    else if (CP_Input_KeyTriggered(KEY_3))
        CP_Settings_ImageWrapMode(CP_IMAGE_WRAP_REPEAT);
    else if (CP_Input_KeyTriggered(KEY_4))
        CP_Settings_ImageWrapMode(CP_IMAGE_WRAP_MIRROR);
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)

# CP_Settings_TextSize
Sets the size of text displayed using [CP_Font_DrawText](Font/#CP_Font_DrawText).

## Function
```C
void CP_Settings_TextSize(float size);
```

### Parameters
* size (float) - The size to draw the text at.

### Return
This function does not return anything.

## Example
```C
float textSize;

void init()
{
    textSize = 20.0f;
    CP_Settings_TextSize(textSize);
}

void update()
{
    // Clear the screen
    CP_Graphics_ClearBackground(CP_Color_Create(100, 200, 250, 150));
    // Display some text at (100, 100)
    CP_Font_DrawText("Testing", 100, 100);

    // Increase and decrease the size of the text using the arrow keys
    if (CP_Input_KeyTriggered(KEY_UP))
    {
        textSize += 5.0f;
        CP_Settings_TextSize(textSize);
    }
    else if (CP_Input_KeyTriggered(KEY_DOWN))
    {
        textSize -= 5.0f;
        CP_Settings_TextSize(textSize);
    }
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Font_DrawText](Font/#CP_Font_DrawText)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)

# CP_Settings_TextAlignment
Sets the alignment for all text draw calls after this function is called. See [CP_TEXT_ALIGN_HORIZONTAL](Types/#CP_TEXT_ALIGN_HORIZONTAL) and [CP_TEXT_ALIGN_VERTICAL](Types/#CP_TEXT_ALIGN_VERTICAL) for the available settings. The horizontal setting defaults to CP_TEXT_ALIGN_H_LEFT and the vertical setting defaults to CP_TEXT_ALIGN_V_BASELINE.

## Function
```C
void CP_Settings_TextAlignment(CP_TEXT_ALIGN_HORIZONTAL h, CP_TEXT_ALIGN_VERTICAL v);
```

### Parameters
* h ([CP_TEXT_ALIGN_HORIZONTAL](Types/#CP_TEXT_ALIGN_HORIZONTAL)) - The horizontal alignment setting.
* v ([CP_TEXT_ALIGN_VERTICAL](Types/#CP_TEXT_ALIGN_VERTICAL)) - The vertical alignment setting.

### Return
This function does not return anything.

## Example
```C
CP_TEXT_ALIGN_HORIZONTAL horizontal = CP_TEXT_ALIGN_H_LEFT;
CP_TEXT_ALIGN_VERTICAL vertical = CP_TEXT_ALIGN_V_BASELINE;

void update()
{
    // Clear the background
    CP_Graphics_ClearBackground(CP_Color_Create(100, 200, 250, 150));

    // Draw lines that cross at (100, 100)
    CP_Settings_Stroke(CP_Color_Create(70, 93, 130, 255));
    CP_Settings_StrokeWeight(1.0f);
    CP_Graphics_DrawLine(0, 100, (float)CP_System_GetDisplayWidth(), 100);
    CP_Graphics_DrawLine(100, 0, 100, (float)CP_System_GetDisplayHeight());

    // Draw some text at (100, 100)
    CP_Settings_Fill(CP_Color_Create(0, 0, 0, 255));
    CP_Font_DrawText("Testing", 100, 100);

    // Toggle between the horizontal alignment settings with A B C
    if (CP_Input_KeyTriggered(KEY_A))
        horizontal = CP_TEXT_ALIGN_H_LEFT;
    else if (CP_Input_KeyTriggered(KEY_B))
        horizontal = CP_TEXT_ALIGN_H_CENTER;
    else if (CP_Input_KeyTriggered(KEY_C))
        horizontal = CP_TEXT_ALIGN_H_RIGHT;

    // Toggle between the vertical alignment settings with 1 2 3 4
    if (CP_Input_KeyTriggered(KEY_1))
        vertical = CP_TEXT_ALIGN_V_TOP;
    else if (CP_Input_KeyTriggered(KEY_2))
        vertical = CP_TEXT_ALIGN_V_MIDDLE;
    else if (CP_Input_KeyTriggered(KEY_3))
        vertical = CP_TEXT_ALIGN_V_BOTTOM;
    else if (CP_Input_KeyTriggered(KEY_4))
        vertical = CP_TEXT_ALIGN_V_BASELINE;

    CP_Settings_TextAlignment(horizontal, vertical);
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Settings_Stroke](Settings/#CP_Settings_Stroke)
* [CP_Settings_StrokeWeight](Settings/#CP_Settings_StrokeWeight)
* [CP_Graphics_DrawLine](Graphics/#CP_Graphics_DrawLine)
* [CP_System_GetDisplayWidth](System/#CP_System_GetDisplayWidth)
* [CP_System_GetDisplayHeight](System/#CP_System_GetDisplayHeight)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Font_DrawText](Font/#CP_Font_DrawText)
* [CP_Input_KeyTriggered](Input/#CP_Input_KeyTriggered)

# CP_Settings_Scale
This function changes the scale of the canvas by the provided scalars. You can change the X and Y scale separately. Note: The scale values must be non-zero and positive, and this function must be called every frame before you draw to the screen.

## Function
```C
void CP_Settings_Scale(float xScale, float yScale);
```

### Parameters
* xScale (float) - The value to scale the canvas by horizontally.
* yScale (float) - The value to scale the canvas by vertically.

### Return
This function does not return anything.

## Example
```C
float scale = 1.0f;

void update()
{
    // Get the change in the mouse wheel
    float wheel = CP_Input_MouseWheel();
    // If the wheel was moved up, increase the scale value
    if (wheel > 0)
        scale += 0.05f;
    // If it was moved down, reduce the scale value
    else if (wheel < 0)
        scale -= 0.05f;

    // Make sure the scale value isn't negative or zero
    if (scale < 0.01f)
        scale = 0.01f;

    // Set the scale
    CP_Settings_Scale(scale, scale);

    // Clear the background
    CP_Graphics_ClearBackground(CP_Color_Create(53, 84, 52, 150));
    // Draw a rectangle
    CP_Graphics_DrawRect(100, 100, 150, 100);
}
```

## Related
* [CP_Input_MouseWheel](Input/#CP_Input_MouseWheel)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Settings_Rotate
Rotates the whole canvas around the upper left corner of the window by the input degrees. Note: This function must be called every frame before you draw to the screen.

## Function
```C
void CP_Settings_Rotate(float degrees);
```

### Parameters
* degrees (float) - The number of degrees to rotate the canvas by.

### Return
This function does not return anything.

## Example
```C
float degrees = 0.0f;

void update()
{
    // Get the change in the mouse wheel
    float wheel = CP_Input_MouseWheel();
    // If the wheel was moved up, increase the rotation degrees
    if (wheel > 0)
        degrees += 3.0f;
    // If it was moved down, reduce the rotation degrees
    else if (wheel < 0)
        degrees -= 3.0f;

    // Set the rotation
    CP_Settings_Rotate(degrees);

    // Clear the background
    CP_Graphics_ClearBackground(CP_Color_Create(66, 27, 64, 150));
    // Draw a rectangle
    CP_Graphics_DrawRect(100, 100, 150, 100);
}
```

## Related
* [CP_Input_MouseWheel](Input/#CP_Input_MouseWheel)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Settings_Translate
This function moves the canvas from its current center by the provided X and Y values. Note: This function must be called every frame before you draw to the screen.

## Function
```C
void CP_Settings_Translate(float x, float y);
```

### Parameters
* x (float) - The distance to move the canvas in the horizontal direction.
* y (float) - The distance to move the canvas in the vertical direction.

### Return
This function does not return anything.

## Example
```C
float xTx = 0.0f;
float yTx = 0.0f;

void update()
{
    // Change the translation values with the arrow keys
    if (CP_Input_KeyDown(KEY_UP))
        yTx -= 5.0f;
    else if (CP_Input_KeyDown(KEY_DOWN))
        yTx += 5.0f;
    if (CP_Input_KeyDown(KEY_LEFT))
        xTx -= 5.0f;
    else if (CP_Input_KeyDown(KEY_RIGHT))
        xTx += 5.0f;

    // Apply the translation values to the canvas
    CP_Settings_Translate(xTx, yTx);

    CP_Graphics_ClearBackground(CP_Color_Create(99, 51, 68, 150));
    CP_Graphics_DrawRect(100, 100, 150, 100);
    CP_Graphics_DrawCircle(180, 220, 100);
}
```

## Related
* [CP_Input_KeyDown](Input/#CP_Input_KeyDown)
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)
* [CP_Color_Create](Color/#CP_Color_Create)

# CP_Settings_ApplyMatrix
Multiplies the current camera transform matrix with the an input matrix.

## Function
```C
void CP_Settings_ApplyMatrix(CP_Matrix m);
```

### Parameters
* m ([CP_Matrix](Types/#CP_Matrix)) - The matrix to apply to the camera transform.

### Return
This function does not return anything.

## Example
```C
void init()
{
    CP_Settings_RectMode(CP_POSITION_CENTER);
    CP_Settings_NoStroke();
}

void update()
{
    // Clear the background
    CP_Graphics_ClearBackground(CP_Color_Create(255, 255, 255, 255));

    // Reset the transform matrix
    CP_Settings_ResetMatrix();

    // The position of the rectangle we are drawing
    CP_Vector position = CP_Vector_Set(CP_System_GetWindowWidth() * 0.5f, CP_System_GetWindowHeight() * 0.5f);

    // Create a transform matrix
    CP_Matrix scale = CP_Matrix_Scale(CP_Vector_Set(150, 100));
    CP_Matrix translate = CP_Matrix_Translate(position);
    CP_Matrix rotate = CP_Matrix_Rotate(45.0f);

    // Combine transform (translate * rotation * scale)
    CP_Matrix transform = CP_Matrix_Multiply(translate, CP_Matrix_Multiply(rotate, scale));

    // Set the camera transform to the created matrix
    CP_Settings_ApplyMatrix(transform);

    // Draw a blue rectangle that has been transformed
    CP_Settings_Fill(CP_Color_Create(0, 0, 255, 255));
    CP_Graphics_DrawRect(0, 0, 1, 1);

    // Reset the transform matrix to the identity matrix
    CP_Settings_ResetMatrix();

    // Draw a red box in the center of the screen
    CP_Settings_Fill(CP_Color_Create(255, 0, 0, 255));
    CP_Graphics_DrawRect(position.x, position.y, 50, 50);
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Settings_ResetMatrix](Settings/#CP_Settings_ResetMatrix)
* [CP_Vector](Types/#CP_Vector)
* [CP_Vector_Set](Vector/#CP_Vector_Set)
* [CP_System_GetWindowWidth](System/#CP_System_GetWindowWidth)
* [CP_System_GetWindowHeight](System/#CP_System_GetWindowHeight)
* [CP_Matrix_Scale](Matrix/#CP_Matrix_Scale)
* [CP_Matrix_Translate](Matrix/#CP_Matrix_Translate)
* [CP_Matrix_Rotate](Matrix/#CP_Matrix_Rotate)
* [CP_Matrix_Multiply](Matrix/#CP_Matrix_Multiply)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)

# CP_Settings_ResetMatrix
Resets the camera transform matrix back to the identity matrix.

## Function
```C
void CP_Settings_ResetMatrix(void);
```

### Parameters
This function has no parameters.

### Return
This function does not return anything.

## Example
```C
void init()
{
    CP_Settings_RectMode(CP_POSITION_CENTER);
    CP_Settings_NoStroke();
}

void update()
{
    // Clear the background
    CP_Graphics_ClearBackground(CP_Color_Create(255, 255, 255, 255));

    // Reset the transform matrix
    CP_Settings_ResetMatrix();

    // The position of the rectangle we are drawing
    CP_Vector position = CP_Vector_Set(CP_System_GetWindowWidth() * 0.5f, CP_System_GetWindowHeight() * 0.5f);

    // Create a transform matrix
    CP_Matrix scale = CP_Matrix_Scale(CP_Vector_Set(150, 100));
    CP_Matrix translate = CP_Matrix_Translate(position);
    CP_Matrix rotate = CP_Matrix_Rotate(45.0f);

    // Combine transform (translate * rotation * scale)
    CP_Matrix transform = CP_Matrix_Multiply(translate, CP_Matrix_Multiply(rotate, scale));

    // Set the camera transform to the created matrix
    CP_Settings_ApplyMatrix(transform);

    // Draw a blue rectangle that has been transformed
    CP_Settings_Fill(CP_Color_Create(0, 0, 255, 255));
    CP_Graphics_DrawRect(0, 0, 1, 1);

    // Reset the transform matrix to the identity matrix
    CP_Settings_ResetMatrix();

    // Draw a red box in the center of the screen
    CP_Settings_Fill(CP_Color_Create(255, 0, 0, 255));
    CP_Graphics_DrawRect(position.x, position.y, 50, 50);
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Vector](Types/#CP_Vector)
* [CP_Vector_Set](Vector/#CP_Vector_Set)
* [CP_System_GetWindowWidth](System/#CP_System_GetWindowWidth)
* [CP_System_GetWindowHeight](System/#CP_System_GetWindowHeight)
* [CP_Matrix_Scale](Matrix/#CP_Matrix_Scale)
* [CP_Matrix_Translate](Matrix/#CP_Matrix_Translate)
* [CP_Matrix_Rotate](Matrix/#CP_Matrix_Rotate)
* [CP_Matrix_Multiply](Matrix/#CP_Matrix_Multiply)
* [CP_Settings_ApplyMatrix](Settings/#CP_Settings_ApplyMatrix)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)

# CP_Settings_Save
Saves the current settings state and adds it to a stack a save states. This includes settings such as transform, fill color, stroke color, and size changes. Can only have 32 save states on the stack at once.

## Function
```C
void CP_Settings_Save(void);
```

### Parameters
This function has no parameters.

### Return
This function does not return anything.

## Example
```C
void init()
{
    CP_Settings_RectMode(CP_POSITION_CENTER);
}

void update()
{
    // Clear the background
    CP_Graphics_ClearBackground(CP_Color_Create(255, 255, 255, 255));

    // Draw a red square in the top left corner
    CP_Settings_Fill(CP_Color_Create(255, 0, 0, 255));
    CP_Settings_Stroke(CP_Color_Create(0, 0, 255, 255));
    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.25f, CP_System_GetWindowHeight() * 0.20f, 100.0f, 100.0f);

    // Save the settings of the first square
    CP_Settings_Save();

    // Draw a blue square in the top middle
    CP_Settings_Fill(CP_Color_Create(0, 0, 255, 255));
    CP_Settings_Stroke(CP_Color_Create(255, 0, 0, 255));
    CP_Settings_StrokeWeight(5);
    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.5f, CP_System_GetWindowHeight() * 0.35f, 100.0f, 100.0f);

    // Save the settings of the second square
    CP_Settings_Save();

    // Now draw a pink and green square on the right side of the screen
    CP_Settings_Fill(CP_Color_Create(200, 0, 200, 255));
    CP_Settings_Stroke(CP_Color_Create(0, 255, 0, 255));
    CP_Settings_StrokeWeight(10);
    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.75f, CP_System_GetWindowHeight() * 0.5f, 100.0f, 100.0f);

    // Restore the blue settings and draw a blue square in the bottom middle
    CP_Settings_Restore();

    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.5f, CP_System_GetWindowHeight() * 0.65f, 100.0f, 100.0f);

    // Restore the red settings and draw a red square in the bottom left
    CP_Settings_Restore();

    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.25f, CP_System_GetWindowHeight() * 0.80f, 100.0f, 100.0f);
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Settings_Stroke](Settings/#CP_Settings_Stroke)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)
* [CP_System_GetWindowWidth](System/#CP_System_GetWindowWidth)
* [CP_System_GetWindowHeight](System/#CP_System_GetWindowHeight)
* [CP_Settings_StrokeWeight](Settings/#CP_Settings_StrokeWeight)
* [CP_Settings_Restore](Settings/#CP_Settings_Restore)

# CP_Settings_Restore
Sets the draw settings back to the last time you called [CP_Settings_Save](#CP_Settings_Save). Removes that save state from the stack. Make sure not to call **CP_Settings_Restore** before calling [CP_Settings_Save](#CP_Settings_Save).

## Function
```C
void CP_Settings_Restore(void);
```

### Parameters
This function has no parameters.

### Return
This function does not return anything.

## Example
```C
void init()
{
    CP_Settings_RectMode(CP_POSITION_CENTER);
}

void update()
{
    // Clear the background
    CP_Graphics_ClearBackground(CP_Color_Create(255, 255, 255, 255));

    // Draw a red square in the top left corner
    CP_Settings_Fill(CP_Color_Create(255, 0, 0, 255));
    CP_Settings_Stroke(CP_Color_Create(0, 0, 255, 255));
    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.25f, CP_System_GetWindowHeight() * 0.20f, 100.0f, 100.0f);

    // Save the settings of the first square
    CP_Settings_Save();

    // Draw a blue square in the top middle
    CP_Settings_Fill(CP_Color_Create(0, 0, 255, 255));
    CP_Settings_Stroke(CP_Color_Create(255, 0, 0, 255));
    CP_Settings_StrokeWeight(5);
    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.5f, CP_System_GetWindowHeight() * 0.35f, 100.0f, 100.0f);

    // Save the settings of the second square
    CP_Settings_Save();

    // Now draw a pink and green square on the right side of the screen
    CP_Settings_Fill(CP_Color_Create(200, 0, 200, 255));
    CP_Settings_Stroke(CP_Color_Create(0, 255, 0, 255));
    CP_Settings_StrokeWeight(10);
    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.75f, CP_System_GetWindowHeight() * 0.5f, 100.0f, 100.0f);

    // Restore the blue settings and draw a blue square in the bottom middle
    CP_Settings_Restore();

    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.5f, CP_System_GetWindowHeight() * 0.65f, 100.0f, 100.0f);

    // Restore the red settings and draw a red square in the bottom left
    CP_Settings_Restore();

    CP_Graphics_DrawRect(CP_System_GetWindowWidth() * 0.25f, CP_System_GetWindowHeight() * 0.80f, 100.0f, 100.0f);
}
```

## Related
* [CP_Graphics_ClearBackground](Graphics/#CP_Graphics_ClearBackground)
* [CP_Color_Create](Color/#CP_Color_Create)
* [CP_Settings_Fill](Settings/#CP_Settings_Fill)
* [CP_Settings_Stroke](Settings/#CP_Settings_Stroke)
* [CP_Graphics_DrawRect](Graphics/#CP_Graphics_DrawRect)
* [CP_Settings_Save](Settings/#CP_Settings_Save)
* [CP_System_GetWindowWidth](System/#CP_System_GetWindowWidth)
* [CP_System_GetWindowHeight](System/#CP_System_GetWindowHeight)
* [CP_Settings_StrokeWeight](Settings/#CP_Settings_StrokeWeight)
